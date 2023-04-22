import { Component, OnInit } from '@angular/core';
import { Receta } from '../../interface/recetas.interface';
import { RecetasService } from '../../services/recetas-service.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  public cols!: any[];
  public datos!: Receta[];
  public usuarioRecibido: string[] = [];


  constructor( private _recetaService: RecetasService) { }

  ngOnInit(): void {

    this.obtenerTodas()

    this.cols = [
            { field: 'idReceta', header: 'ID' },
            { field: 'descripcion', header: 'Descripcion' },
            { field: 'nombre', header: 'Nombre' },
            { field: 'calorias', header: 'Calorias' },
            { field: 'usuario.username', header: 'Usuario' }
        ];
  }

  obtenerTodas(){
    this._recetaService.todasRecetas().subscribe( res => {
      this.datos = res;
      console.log(this.datos);
    });
  }
}

