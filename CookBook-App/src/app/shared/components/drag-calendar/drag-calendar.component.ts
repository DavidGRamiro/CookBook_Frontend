import { CalendarWeek, Receta } from 'src/app/recetas/interface/recetas.interface';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { RecetasService } from 'src/app/recetas/services/recetas.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-drag-calendar',
  templateUrl: './drag-calendar.component.html',
  styleUrls: ['./drag-calendar.component.css']
})
export class DragCalendarComponent implements OnInit {

  todo!: Receta[];

  calendar: CalendarWeek =  {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

  constructor(private _recetaService : RecetasService,
              private _msg : MessageService) { }

  private initCalendar() {
    this.calendar.monday = [];
    this.calendar.tuesday = [];
    this.calendar.wednesday = [];
    this.calendar.thursday = [];
    this.calendar.friday = [];
    this.calendar.saturday = [];
    this.calendar.sunday = [];
  }

  ngOnInit(): void {
    debugger;
    let calendarItem = localStorage.getItem('calendarWeek');
    if (!calendarItem){
      this.initCalendar();
    }else{
      this.calendar = JSON.parse(calendarItem);
    }



    this._recetaService.todasRecetas().subscribe(response => {
      this.todo = response;
    })
  }


  saveCalendar(){
    localStorage.setItem("calendarWeek", JSON.stringify(this.calendar)  )
    this._msg.add({severity:'success', summary:'Bien hecho !', detail:'Tu planning semanal se ha actualizado'});
  }

  clearCalendar(){
    localStorage.removeItem("calendarWeek")
    this.initCalendar()
    this._msg.add({severity:'info', summary:'Calendario actualizado', detail:'Comienza de nuevo tu planing semanal'});

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

  dropCopy(event: CdkDragDrop<Receta[]>) {

    const element = (event.previousContainer.data as Receta[])[
      event.previousIndex
    ];

    const isExist = (event.container.data as Receta[]).includes(element);
    const isTodo = (event.container.id == "todoList") && !(event.previousContainer.id == "todoList")

    if (!isExist){
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }else if(event.container == event.previousContainer){
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }


    if(isTodo){
      event.previousContainer.data.splice(event.previousIndex, 1)
    }
  }



}
