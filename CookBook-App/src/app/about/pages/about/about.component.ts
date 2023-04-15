import { Component } from '@angular/core';
import { listaSecciones } from '../../interfaces/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  listaSecciones: listaSecciones[] = [
    { item : 'FAQS', ruta: 'faqs'},
    { item: 'Contacto', ruta: 'contacto' }
  ]
}
