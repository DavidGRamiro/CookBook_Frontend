import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { RecetasService } from 'src/app/recetas/services/recetas.service';

@Component({
  selector: 'app-drag-calendar',
  templateUrl: './drag-calendar.component.html',
  styleUrls: ['./drag-calendar.component.css']
})
export class DragCalendarComponent implements OnInit {
  
  todo!: Receta[];

  monday!: Receta[];
  tuesday!: Receta[];
  wednesday!: Receta[];
  thursday!: Receta[];
  friday!: Receta[];
  saturday!: Receta[];
  sunday!: Receta[];

  constructor(private _recetaService : RecetasService) { }

  ngOnInit(): void {
    this.monday = [];
    this.tuesday = [];
    this.wednesday = [];
    this.thursday = [];
    this.friday = [];
    this.saturday = [];
    this.sunday = [];


    this._recetaService.todasRecetas().subscribe(response => {
      this.todo = response;
    })
  }

  drop(event: CdkDragDrop<Receta[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
