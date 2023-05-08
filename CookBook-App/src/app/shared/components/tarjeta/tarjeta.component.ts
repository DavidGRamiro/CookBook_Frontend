import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() receta!: Receta;
  tiempoTotal!: number;
  ingredientes!: number;

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

  //Funcion que recoge cuantos ingredientes se necesitan para la receta
  calcularIngredientes(){
    // LLamamos al servicio para que nos devuelva el array de ingredientes
    this._sharedService.obtenerIngredientesDeReceta(this.receta.idReceta).subscribe( response => {
      this.ingredientes = response.length;
      console.log(this.receta.nombre);
      console.log(response);
    });
  }

  constructor(private _sharedService: SharedService) { }
  ngOnInit(): void {
      this.tiempoTotal = this.calcularTiempoTotal();
      this.calcularIngredientes();
  }
}
