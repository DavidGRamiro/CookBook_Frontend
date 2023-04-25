import { Component, Input } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() receta!: Receta;
}
