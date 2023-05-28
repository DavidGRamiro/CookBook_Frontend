import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { Comentario, Receta } from '../../interface/recetas.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MenuItem, MessageService } from 'primeng/api';
import { Usuario } from 'src/app/auth/interface/auth.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';

@Component({
  selector: 'app-ver-una',
  templateUrl: './ver-una.component.html',
  styleUrls: ['./ver-una.component.css']
})
export class VerUnaComponent implements OnInit {

  public receta!: Receta;
  public comentario!: Comentario[];
  public usuarioLogueado : Usuario | undefined;
  public nombreReceta : string = '';
  // Variables para la modificación de las cantidades
  carbohidratos! : number;
  proteinas!: number;
  grasas!: number;
  calorias!: number;
  cantidad: number = 0;

  instruciones: string[] = [];
  //Asociada al ngModel del input
  valor: number = 1;

  //Para la paginacion de los comentarios
  pageSize = 5;
  totalRecords = 100;
  first = 0;

  //BreadCrumb
  items: MenuItem[] = [];
  home!: MenuItem;

  ngOnInit(): void {

    //Recupera el id de la receta dependiendo de la ruta en la que nos encontremos.
    //Llamamos al servicio y le mandamos por parámetro el id de la receta que queremos recuperar.
    this._activateRoute.params
                        .pipe(
                          switchMap( ({ id }) => this._recetasService.obtenerUnaReceta(id)))
                          .subscribe( response => {
                            this.receta = response
                            this.nombreReceta = this.receta.nombre
                            console.log(this.nombreReceta)

                            if(this.receta != null){
                              this.dividirCadena()
                              this.actualizarMacros();
                            }
                            })
    localStorage.getItem('user') != null ? this.usuarioLogueado = JSON.parse(localStorage.getItem('user')!) : null;

    this.items = [{ label: 'Todas las recetas', routerLink:"/recetas/todas" }, { label : 'Detalles de receta' }]
    this.home = { icon: 'pi pi-home', routerLink : "/home" }
  }

  constructor( private _recetasService: RecetasService,
              private _activateRoute : ActivatedRoute,
              private _userService : UsuarioService,
              private _msg: MessageService,
              private _fb : FormBuilder ){}

  //Formulario para el alta de un nuevo comentario
  formComentario : FormGroup = this._fb.group({
    textoComentario: ['', [Validators.required]]
  })

  // Obtiene los comentarios de cada receta.
  obtenerComentarios( variable : number){
    this._recetasService.obtenerComentarios(variable).subscribe( response =>{
    return this.comentario = response;
    })
  }

  //Dividir la cadena en subCadenas referente a las instrucciones de la receta.
  dividirCadena(){
    let cadena = this.receta.instrucciones;
    let subCadena = cadena.split(".")
    this.instruciones = subCadena;
  }

  // Función que actualiza los datos de los macronutrientes en función de la cantidad de raciones que se quieran hacer.
  actualizarMacros(){
    this.carbohidratos = this.receta.carbohidratos;
    this.proteinas = this.receta.proteinas;
    this.grasas = this.receta.grasas;
    this.calorias = this.receta.calorias;

    this.cantidad = this.receta.recetasConIngredientes[0].cantidad != null ? this.receta.recetasConIngredientes[0].cantidad : 0;

    return [
        this.carbohidratos = Math.round(this.carbohidratos) * this.valor,
        this.proteinas = Math.round(this.proteinas)* this.valor,
        this.grasas = Math.round(this.grasas) * this.valor,
        this.calorias = Math.round(this.calorias) * this.valor,
        this.cantidad = this.cantidad * this.valor
      ]
  }

  subirComentario(){
    //Verificamos que el formulario tiene contenido. Si no, mostramos mensaje de error
    if(this.formComentario.valid){
    //Accedemos al valor del formlario en formato JSON
    const comentario = this.formComentario.getRawValue();
    console.log(comentario);

      if(this.usuarioLogueado != undefined){
        //Hacemos la petición la back.
        this._recetasService.altaComentario( comentario ,this.receta.idReceta, this.usuarioLogueado.idUsuario ?? 0).subscribe( data => {
              this.comentario.push(data);
              this._msg.add({ severity: 'info', summary: '¡ Gracias !', detail: 'Tu comentario ayuda a seguir mejorando' });
              //Borramos el contenido del formulario una vez subido el comentario.
              this.formComentario.reset();
        },
        error => {
          this._msg.add({ severity: 'warn', summary: '¡Ops!', detail: 'Parece que algo ha salido mal' });
        })
      }
    }else
      this._msg.add({ severity:'warn', summary: '¡ Atención !', detail: 'El comentario no puede ir vacío' })
  }

  //Funciona para mostrar el mensaje personalizado <p-toast>
  addFav(){
    this._msg.add({ severity: 'info', summary: 'Guardada', detail: 'Receta añadida a favoritos !' });
  }
  addLike(){
    this._msg.add({ severity: 'success', summary: 'Me encanta !', detail: '¡ Has dado me gusta a esta receta !'});
  }


  //Elimina un solo comentario de un usuario.
  eliminarComentario( idComentario : number){
    if(idComentario != null && idComentario != undefined){
      this._userService.eliminarComentario(idComentario).subscribe( data => {
        this._msg.add({ severity: 'info', summary: 'El comentario ha sido eliminado'})

      },
      error => {
        this._msg.add({ severity: 'error', summary: 'No se ha podido eliminar el comentario' })
      }
      )
    }else{
      this._msg.add({ severity: 'warning', summary: 'No existe el comentario' })
    }
  }
}
