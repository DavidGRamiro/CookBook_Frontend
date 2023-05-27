import { Component, OnInit } from '@angular/core';

import { PlanService } from '../../services/plan.service';
import { Plan } from '../../interfaces/plan.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-planes',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})
export class VerTodosComponent implements OnInit{

  public listaPlanes: Plan[] = [];

  //BreadCrumb
  items: MenuItem[] = [];
  home!: MenuItem;

  constructor( private _planService: PlanService) { }

  ngOnInit(): void {

    this.obtenerTodos()

    this.items = [{ label: 'Planes' }]
    this.home = { icon: 'pi pi-home', routerLink: '/home' }
  }

  //Obtener todos los planes que tenemos dispobibles
  obtenerTodos(){
    this._planService.todosPlanes().subscribe( res => {
      this.listaPlanes = res;
    })
  }


}
