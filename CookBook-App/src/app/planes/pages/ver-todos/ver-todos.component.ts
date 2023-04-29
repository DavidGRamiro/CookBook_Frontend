import { Component } from '@angular/core';
import { listaPlanes } from '../../interfaces/lista-planes.interface';

@Component({
  selector: 'app-planes',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})
export class VerTodosComponent {

  listaPlanes: listaPlanes[] = [
    { item: 'Perder peso', ruta: 'perdida'},
    { item: 'Ganar peso', ruta: 'ganar' },
    { item: 'Saludable', ruta: 'saludable'}
  ];



}
