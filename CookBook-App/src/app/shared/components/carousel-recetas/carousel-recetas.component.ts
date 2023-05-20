import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { RecetasService } from 'src/app/recetas/services/recetas.service';

@Component({
  selector: 'app-carousel-recetas',
  templateUrl: './carousel-recetas.component.html',
  styleUrls: ['./carousel-recetas.component.css']
})
export class CarouselRecetasComponent implements OnInit {


  responsiveOptions!: any[];
  recetas : Receta[] = [];

  constructor( private _recetaService : RecetasService) { }

  ngOnInit(): void {

    this._recetaService.todasRecetas().subscribe( response => {
      this.recetas = response;
      console.log(this.recetas)
    })

    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '1220px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '1100px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }
}







