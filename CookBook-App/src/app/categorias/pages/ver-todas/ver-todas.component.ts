import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categorias.interface';
import { CategoriasService } from '../../services/categorias.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ver-todas',
  templateUrl: './ver-todas.component.html',
  styleUrls: ['./ver-todas.component.css']
})
export class VerTodasComponent implements OnInit {

  public datos!: Categoria[];

  //BreadCrumb
  items: MenuItem[] = [];
  home!: MenuItem;


  ngOnInit(): void {
    this.cargaCategorias()

    this.items = [{ label: 'Categorias'} ]
    this.home = { icon: 'pi pi-home', routerLink: '/home' }
  }

  constructor( private _categoriasService:CategoriasService ) {}

  //Cargamos todas las categorias que tenemos disponibles
  cargaCategorias(){
    this._categoriasService.getTodasCategorias()
    .subscribe(response =>{
      this.datos = response
    }
      )
  }
}
