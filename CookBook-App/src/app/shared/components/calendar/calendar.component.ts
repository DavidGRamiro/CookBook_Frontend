import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { RecetasService } from 'src/app/recetas/services/recetas.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  availableRecetas!: Receta[];

  selectedRecetas!: Receta[];

  draggedReceta!: Receta | null;

  constructor(private _recetaService : RecetasService) { }

  ngOnInit() {
    
    this.selectedRecetas = [];
      this._recetaService.todasRecetas().subscribe(response => {
        this.availableRecetas = response;
      })
    }

  dragStart(receta: Receta) {
    
      this.draggedReceta = receta;
  }

  drop() {
      if (this.draggedReceta) {
          let draggedProductIndex = this.findIndex(this.draggedReceta);
          this.selectedRecetas = [...this.selectedRecetas, this.draggedReceta];
          this.availableRecetas = this.availableRecetas.filter((val, i) => i != draggedProductIndex);
          this.draggedReceta = null;
      }
  }

  dragEnd() {
      this.draggedReceta = null;
  }

  findIndex(receta: Receta) {
      let index = -1;
      for (let i = 0; i < this.availableRecetas.length; i++) {
          if (receta.idReceta === this.availableRecetas[i].idReceta) {
              index = i;
              break;
          }
      }
      return index;
  } 

}
