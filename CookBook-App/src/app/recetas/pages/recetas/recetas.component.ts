import { Component, OnInit } from '@angular/core';
import { Receta } from '../../interface/recetas.interface';
import { RecetasService } from '../../services/recetas.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  public cols!: any[];
  public datos!: Receta[];
  public usuarioRecibido: string[] = [];

  //Variables para el autocompletado
  public seleccionReceta: any;
  public filtroReceta!: Receta[];

  constructor( private _recetaService: RecetasService) { }

  ngOnInit(): void {
    this.obtenerTodas()
    //Esto es para la tabla. Si no la llegamos a usar se borra.
    this.cols = [
            { field: 'idReceta', header: 'ID' },
            { field: 'descripcion', header: 'Descripcion' },
            { field: 'nombre', header: 'Nombre' },
            { field: 'calorias', header: 'Calorias' },
            { field: 'usuario.username', header: 'Usuario' }
        ];
  }

  //Recuperamos del servicio todas la recetas registradas
  obtenerTodas(){
    this._recetaService.todasRecetas().subscribe( res => {
      this.datos = res;
    });
  }

  //Muestra las opciones disponibles a partir de la búsqueda del input
  autoCompletadoReceta( event : any){
    let filtro : any[] = [];
    let query = event.query

    for ( let i = 0; i < this.datos.length; i++ ){
      let receta = this.datos[i];
      if( receta.nombre.toLocaleLowerCase().indexOf(query.toLowerCase()) === 0){
        filtro.push(receta)
      }
    }
    this.filtroReceta = filtro;
  }
}

