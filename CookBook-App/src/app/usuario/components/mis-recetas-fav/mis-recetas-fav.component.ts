import { Component, Input, OnInit} from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';

@Component({
  selector: 'app-mis-recetas-fav',
  templateUrl: './mis-recetas-fav.component.html',
  styleUrls: ['./mis-recetas-fav.component.css']
})
export class MisRecetasFavComponent implements OnInit {
  @Input() recetasFavoritas!: Receta[];
  recetaSeleccionada!: Receta;

  constructor() { }

  ngOnInit(): void {  }
}
