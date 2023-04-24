import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categorias.interface';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-ver-todas',
  templateUrl: './ver-todas.component.html',
  styleUrls: ['./ver-todas.component.css']
})
export class VerTodasComponent implements OnInit {

  categoriaRecibida! : Categoria;
  categorias!: Categoria[];
  //Todo lo que metamos aqui, la primera vez que se cargue el componente
  ngOnInit(): void {
    this.loquesea();
  }

  //CRT+ espacio te da todas las opciones
  constructor(private _categoriasService:CategoriasService) {}

  loquesea(){
    this._categoriasService.getTodasCategoias()
    .subscribe(response =>{
      this.categorias = response
      console.table(this.categorias)
    }
      )
  }
}
