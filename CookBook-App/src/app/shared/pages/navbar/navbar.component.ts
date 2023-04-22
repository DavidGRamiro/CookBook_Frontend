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
        { label: 'Desayunos', routerLink: 'recetas/desayunos' },
        { label: 'Comidas', routerLink: 'recetas/comidas' },
        { label: 'Cenas', routerLink: 'recetas/cenas' },
        { label: 'Vegano', routerLink: 'recetas/veganos' },
        { label: 'Para niños', routerLink: 'recetas/ninios' },
        { label: 'Alérgenos', routerLink: 'recetas/alergenos' },
        { label: 'Categorias', routerLink: 'categorias/todas' },
        { label: 'Todas las recetas', routerLink: 'recetas/todas' },
      ]
    },
    {
      label: 'Planes de alimentación',
      items: [
        { label: 'Perder peso', routerLink: 'planes/perdida' },
        { label: 'Ganar peso', routerLink: 'planes/ganar' },
        { label: 'Saludable', routerLink: 'planes/saludable' }
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
