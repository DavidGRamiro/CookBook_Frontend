import { Component } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { RecetasService } from 'src/app/recetas/services/recetas.service';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent {

  public datos!: Receta[];

  constructor(private _recetaService: RecetasService) { }

  ngOnInit(): void {
    this.obtenerTodas();
  }

  obtenerTodas(){
    this._recetaService.recetaPorCategoria("Postres").subscribe( res => {
      this.datos = res;
    });
  }
}

