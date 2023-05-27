import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';

@Component({
  selector: 'app-tarjeta-calendar',
  templateUrl: './tarjeta-calendar.component.html',
  styleUrls: ['./tarjeta-calendar.component.css']
})
export class TarjetaCalendarComponent implements OnInit{
  @Input() receta!: Receta;

  ngOnInit(): void {

}

}
