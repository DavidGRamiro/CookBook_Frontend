import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //Configuración necesaria para habilitar el efecto Ripple en los botones.
  constructor( private configPrimeNG: PrimeNGConfig) { }

  ngOnInit(): void {
    this.configPrimeNG.ripple = true;
  }
}

