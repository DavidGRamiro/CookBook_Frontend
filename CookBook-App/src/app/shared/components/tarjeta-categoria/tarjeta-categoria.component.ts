import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/categorias/interfaces/categorias.interface';

@Component({
  selector: 'app-tarjeta-categoria',
  templateUrl: './tarjeta-categoria.component.html',
  styleUrls: ['./tarjeta-categoria.component.css']
})
export class TarjetaCategoriaComponent {

  @Input() categoria!: Categoria;

}
