import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Ingrediente } from '../../interfaces/share.interface';

@Component({
  selector: 'app-fomulario-receta',
  templateUrl: './fomulario-receta.component.html',
  styleUrls: ['./fomulario-receta.component.css']
})
export class FomularioRecetaComponent implements OnInit{

  ingredientes!: Ingrediente[];

  constructor(private _sharedService : SharedService){}

  ngOnInit(): void {
    this.obtenerIngredientes()
  }

  obtenerIngredientes(){
    this._sharedService.obtenerTodos().subscribe( data => {
      this.ingredientes = data;
      console.log(this.ingredientes)
    })
  }



}
