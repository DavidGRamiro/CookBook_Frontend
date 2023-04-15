import { Component } from '@angular/core';
import { listaPlanes } from '../../interfaces/lista-planes.interface';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent {

  listaPlanes: listaPlanes[] = [
    { item: 'Perder peso', ruta: 'perdida'},
    { item: 'Ganar peso', ruta: 'ganar' },
    { item: 'Saludable', ruta: 'saludable'}
  ];



}
