import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/share.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: MenuItem[] = [
    { item: 'Home', ruta: '/home'},
    { item: 'Recetas', ruta: '/recetas' },
    { item: 'Planes', ruta: '/planes'},
    { item: 'Mi perfil', ruta: '/user' },
    { item: 'Sobre nosotros', ruta: '/about' },
    { item: 'Login', ruta: '/auth/login' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
