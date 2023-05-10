import { Component, OnInit } from '@angular/core';

import { PlanService } from '../../services/plan.service';
import { Plan } from '../../interfaces/plan.interface';



@Component({
  selector: 'app-planes',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})
export class VerTodosComponent implements OnInit{

  public listaPlanes: Plan[] = [];

  constructor( private _planService: PlanService) { }

  ngOnInit(): void {
      
    this.obtenerTodos()
    

  }
  
  obtenerTodos(){
    this._planService.todosPlanes().subscribe( res => {
      this.listaPlanes = res;
    })
  }


}
