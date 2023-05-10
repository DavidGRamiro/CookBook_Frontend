import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { Comentario, Receta } from '../../interface/recetas.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ver-una',
  templateUrl: './ver-una.component.html',
  styleUrls: ['./ver-una.component.css']
})
export class VerUnaComponent implements OnInit {

  public receta!: Receta;
  public comentario!: Comentario[];
  // Variables para la modificación de las cantidades
  carbohidratos! : number;
  proteinas!: number;
  grasas!: number;
  calorias!: number;
  //Variable para la modificación de las cantidades.
  cantidad: number = 0;

  instruciones: string[] = [];
  //Asociada al ngModel del input
  valor: number = 1;


  ngOnInit(): void {

    //Recupera el id de la receta dependiendo de la ruta en la que nos encontremos.
    //Llamamos al servicio y le mandamos por parámetro el id de la receta que queremos recuperar.
    this._activateRoute.params
                        .pipe(
                          switchMap( ({ id }) => this._recetasService.obtenerUnaReceta(id)))
                          .subscribe( response => {
                            this.receta = response

                            if(this.receta != null){
                              this.dividirCadena()
                              this.actualizarMacros();
                            }
                            })

  }

  constructor( private _recetasService: RecetasService,
              private _activateRoute : ActivatedRoute,
              private _msg: MessageService ){}

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

  //Funciona para mostrar el mensaje personalizado <p-toast>
  addFav(){
    this._msg.add({ severity: 'info', summary: 'Guardada', detail: 'Receta añadida a favoritos !' });
  }
  addLike(){
    this._msg.add({ severity: 'success', summary: 'Me encanta !', detail: '¡ Has dado me gusta a esta receta !'});
  }
}
