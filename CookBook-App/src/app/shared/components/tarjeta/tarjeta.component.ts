import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { SharedService } from '../../services/shared.service';
import { Usuario } from 'src/app/auth/interface/auth.interface';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RecetasService } from 'src/app/recetas/services/recetas.service';
import { DialogService } from 'primeng/dynamicdialog';
import { EditRecetaComponent } from 'src/app/admin/components/edit-receta/edit-receta.component';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() receta!: Receta;
  tiempoTotal!: number;
  ingredientes!: number;
  usuarioLogueado! : Usuario;
  idAdministrador: number = 0;
  creador!: boolean;
  ref! : DialogService;

  constructor(private _sharedService: SharedService,
              private _confirmService : ConfirmationService,
              private _msg : MessageService,
              private _recetaService : RecetasService,
              private _dialogService : DialogService
              ) { }

  ngOnInit(): void {
      this.tiempoTotal = this.calcularTiempoTotal();
      this.calcularIngredientes();
      this.obtenerAdministrador();
      this.isUserCreador();
  }
  //Obtenemos el usuario logueado.Si es el administrador, le damos permiso para editar y borrar recetas
  obtenerAdministrador(){
    this.usuarioLogueado = JSON.parse(localStorage.getItem('user')!);
    this.usuarioLogueado.idUsuario === 100 ? this.idAdministrador = 100 : this.idAdministrador = 0;
  }

  isUserCreador(){
    let idCreador = this.receta.usuario.idUsuario;
    let idUsuario = this.usuarioLogueado.idUsuario;
    this.creador = idCreador === idUsuario;
    return this.creador;
  }

  // Funcion que calcula el tiempo total de coccion
  calcularTiempoTotal(){
    let tiempo = 0;
    //Comprobamos que ni el tiempo de preparacion ni el de coccion sean null en la bbdd
    if(this.receta.tiempoPreparacion != null && this.receta.tiempoCoccion != null){
      tiempo = this.receta.tiempoPreparacion + this.receta.tiempoCoccion;
    }
    //Si el tiempo de preparacion es null, sumamos solo el tiempo de coccion
    else if(this.receta.tiempoPreparacion == null && this.receta.tiempoCoccion != null){
      tiempo = this.receta.tiempoCoccion;
    }
    //Si el tiempo de coccion es null, sumamos solo el tiempo de preparacion
    else if(this.receta.tiempoPreparacion != null && this.receta.tiempoCoccion == null){
      tiempo = this.receta.tiempoPreparacion;
    }
    return tiempo;
  }

  //Funcion que recoge cuantos ingredientes se necesitan para la receta
  calcularIngredientes(){
    // LLamamos al servicio para que nos devuelva el array de ingredientes
    this._sharedService.obtenerIngredientesDeReceta(this.receta.idReceta).subscribe( response => {
      this.ingredientes = response.length;
    });
  }

  //Funcion que elimina una receta
  eliminarReceta(event: Event){

    this._confirmService.confirm({
      target: event.target!,
      message: '¿ Estás seguro de que desear eliminar esta receta ?. Esta acción no se puede deshacer',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //Llamamos al servicio para eliminar la receta y mostramos el modal informativo.
        this._recetaService.eliminarReceta(this.receta.idReceta).subscribe( response => {

          this._msg.add({severity:'success', summary:'Receta eliminada', detail:'La receta ha sido eliminada correctamente'});
          //Recargamos la página para que se actualice la lista de recetas
          setTimeout( () => {
            window.location.reload();
          }, 1000)
        },
        error => {
          console.error('Error al eliminar la receta',error)
        });
      },
      reject: () => {
        this._msg.add({severity:'info', summary:'Operación cancelada', detail:'La receta no se ha eliminado'});
      }
    })
  }

  //Modal asociado a un componente para poder editar la receta.
  editarReceta(){
    this._dialogService.open( EditRecetaComponent, { data: { receta: this.receta },
                                                    header: 'Panel de actualización de receta' ,
                                                    width: '50%',})
  }

}
