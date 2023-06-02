import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit{

    //BreadCrumb
    items: MenuItem[] = [];
    home!: MenuItem;

    ngOnInit(): void {
  
      this.items = [{ label: 'Perfil', routerLink: '/user/perfil' },{ label: 'Calendario', routerLink: '/user/planificador' } ]
      this.home = { icon: 'pi pi-home', routerLink: '/home' }
    }

}
