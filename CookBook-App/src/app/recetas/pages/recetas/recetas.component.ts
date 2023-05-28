import { Component, OnInit } from '@angular/core';
import { Receta } from '../../interface/recetas.interface';
import { RecetasService } from '../../services/recetas.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
})
export class RecetasComponent implements OnInit {
  public cols!: any[];
  public datos!: Receta[];
  public usuarioRecibido: string[] = [];

  //Variables para el autocompletado
  public seleccionReceta: any;
  public filtroReceta!: Receta[];
  isSearchByNameActive: boolean = false;
  isSearchByIngredientsActive: boolean = false;

  //Variables para el filtro
  selectedFilter: string = 'Buscar';
  selectedSearchOption: string = 'nombre';
  searchOptions: any[] = [
    { label: 'Buscar por nombre', value: 'nombre' },
    { label: 'Buscar por ingredientes', value: 'ingredientes' },
  ];

  //BreadCrumb
  items: MenuItem[] = [];
  home!: MenuItem;

  searchQuery!: string;

  constructor(private _recetaService: RecetasService) {}

  ngOnInit(): void {
    this.obtenerTodas();
    //Esto es para la tabla. Si no la llegamos a usar se borra.
    this.cols = [
      { field: 'idReceta', header: 'ID' },
      { field: 'descripcion', header: 'Descripcion' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'calorias', header: 'Calorias' },
      { field: 'usuario.username', header: 'Usuario' },
    ];

    this.items = [{ label: 'Todas las recetas' }];
    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }

  buscarReceta(event: any) {
    let query = this.searchQuery.toLowerCase().trim();
    let selectedOption = this.selectedSearchOption;

    if (query.length === 0) {
      this.obtenerTodas();
      return;
    }

    this.datos = this.datos.filter((receta: Receta) => {
      let nombre = receta.nombre.toLowerCase();

      if (selectedOption === 'nombre') {
        return nombre.includes(query);
      }

      return false;
    });
  }

  //Recuperamos del servicio todas la recetas registradas
  obtenerTodas() {
    this._recetaService.todasRecetas().subscribe((res) => {
      this.datos = res;
    });
  }

  //Muestra las opciones disponibles a partir de la búsqueda del input
  autoCompletadoReceta(event: any) {
    let filtro: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.datos.length; i++) {
      let receta = this.datos[i];
      if (
        receta.nombre.toLocaleLowerCase().indexOf(query.toLowerCase()) === 0
      ) {
        filtro.push(receta);
      }
    }
    this.datos = filtro;
  }

  searchByName(event: any) {
    console.log(event.query);
    if (!this.isSearchByNameActive) {
      this.isSearchByNameActive = true;
      this.isSearchByIngredientsActive = false;

      let filtro: any[] = [];
      let query = this.searchQuery;

      for (let i = 0; i < this.datos.length; i++) {
        let receta = this.datos[i];
        if (
          receta.nombre.toLocaleLowerCase().indexOf(query.toLowerCase()) === 0
        ) {
          filtro.push(receta);
        }
      }

      this.datos = filtro;
    }
  }

  searchByIngredients(event: any) {
    console.log(event);
    if (!this.isSearchByIngredientsActive) {
      this.isSearchByIngredientsActive = true;
      this.isSearchByNameActive = false;

      let filtro: any[] = [];
      let query = this.searchQuery;

      for (let i = 0; i < this.datos.length; i++) {
        let receta = this.datos[i];
        if (receta.recetasConIngredientes.length > 0) {
          for (let j = 0; j < receta.recetasConIngredientes.length; j++) {
            let recetasConIng = receta.recetasConIngredientes[j];
            if (
              recetasConIng.ingrediente.nombre
                .toLocaleLowerCase()
                .indexOf(query.toLowerCase()) === 0
            ) {
              filtro.push(receta);
            } else {
              console.log('No hay recetas con ese ingrediente');
            }
          }
        } else {
          console.log('No hay recetas con ingredientes');
        }
      }
      this.datos = filtro;
    }
  }
}
