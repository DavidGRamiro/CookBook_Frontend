import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() receta!: Receta;
  tiempoTotal!: number;

  // Funcion que calcula el tiempo total de coccion
  calcularTiempoTotal(){
    let tiempo = 0;
    //Comprobamos que ni el tiempo de preparacion ni el de coccion sean null en la bbdd
    if(this.receta.tiempoPreparacion != null && this.receta.tiempoCoccion != null){
      tiempo = this.receta.tiempoPreparacion + this.receta.tiempoCoccion;
    }
    //Si el tiempo de preparacion es null, sumamos solo el tiempo de coccion
    else if(this.receta.tiempoPreparacion == null && this.receta.tiempoCoccion != null){
      tiempo = this.receta.tiempoCoccion;
    }
    //Si el tiempo de coccion es null, sumamos solo el tiempo de preparacion
    else if(this.receta.tiempoPreparacion != null && this.receta.tiempoCoccion == null){
      tiempo = this.receta.tiempoPreparacion;
    }
    return tiempo;
  }
  constructor() { }
  ngOnInit(): void {
      this.tiempoTotal = this.calcularTiempoTotal();
  }
}
