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
  termino!: number;
  value: number = 0;

  ngOnInit(): void {

    //Recupera el id de la receta dependiendo de la ruta en la que nos encontremos.
    //Llamamos al servicio y le mandamos por parámetro el id de la receta que queremos recuperar.
    this._activateRoute.params
                        .pipe(
                          switchMap( ({ id }) => this._recetasService.obtenerUnaReceta(id)))
                          .subscribe( response => this.receta = response)
  }

  constructor( private _recetasService: RecetasService,
              private _activateRoute : ActivatedRoute,
              private _msg: MessageService ){}


  obtenerComentarios( variable : number){
    this._recetasService.obtenerComentarios(variable).subscribe( response =>{
      this.comentario = response;
    })
  }

  //Funciona para mostrar el mensaje personalizado <p-toast>
  addFav(){
    this._msg.add({ severity: 'info', summary: 'Guardada', detail: 'Receta añadida a favoritos !' });
  }
  addLike(){
    this._msg.add({ severity: 'success', summary: 'Me encanta !', detail: '¡ Has dado me gusta a esta receta !'});
  }
}
