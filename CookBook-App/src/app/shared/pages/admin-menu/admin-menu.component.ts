import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit{

  sidebarVisible: boolean = false;

  ngOnInit(): void {
  }

  constructor(){}

  sideBarMenu : MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/home']
    },
    {
      label: 'Recetas',
      icon: 'pi pi-fw pi-book',
      routerLink: ['/recetas']
    },
    {
      label: 'Usuarios',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/admin/usuarios']
    },
    {
      label: 'Ajustes',
      icon: 'pi pi-fw pi-cog',
      routerLink: ['/ajustes']
    },
    {
      label: 'Cerrar Sesión',
      icon: 'pi pi-fw pi-sign-out',
      routerLink: ['/login']
    },
    {
      label: 'Estadísticas',
      icon: 'pi pi-fw pi-chart-bar',
      routerLink: ['/admin/estadisticas']
    }
  ]

}
