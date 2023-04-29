import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() loggin!: boolean;

  public menuItems: MenuItem[] = [
    {
      label: 'Recetas',
      items: [
        { label: 'Categorias', routerLink: 'categorias/todas' },
        { label: 'Todas las recetas', routerLink: 'recetas/todas' },
      ]
    },
    {
      label: 'Planes',
      items: [
        { label: 'Todos los planes', routerLink: 'planes/todos'}
      ]
    },
    {
      label: 'Acerca de',
      items: [
        { label: 'Quiénes somos', routerLink: 'about' },
        { label: 'FAQs', routerLink: 'about/faqs' },
        { label: 'Contacto', routerLink: 'about/contacto' }
      ]
    },
    {
      label: 'Perfil',
      items: [
        { label: 'Mi perfil', routerLink: 'user' },
        { label: 'Notificaciones', routerLink: 'user/notificaciones' }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
