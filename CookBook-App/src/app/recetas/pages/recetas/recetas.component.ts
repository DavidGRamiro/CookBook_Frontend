import { Component, OnInit } from '@angular/core';
import { MenuReceta } from '../../interface/menuReceta.interface';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  menuReceta: MenuReceta[] = [
    { categoria: 'Alergenos', ruta: '/recetas/alergenos'},
    { categoria: 'Cenas', ruta: '/recetas/cenas'},
    { categoria: 'Comidas', ruta: '/recetas/comidas'},
    { categoria: 'Desayunos', ruta: '/recetas/desayunos'},
    { categoria: 'Niños', ruta: '/recetas/niños'},
    { categoria: 'Todas', ruta: '/recetas/todas'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
