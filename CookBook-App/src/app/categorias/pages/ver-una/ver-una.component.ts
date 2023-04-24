import { Component } from '@angular/core';
import { Categoria } from '../../interfaces/categorias.interface';
import { CategoriasService } from '../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-una',
  templateUrl: './ver-una.component.html',
  styleUrls: ['./ver-una.component.css']
})
export class VerUnaComponent {

  public datos!: Categoria;
  public categoria!: string;

  constructor(private _categoriaService: CategoriasService,
    private _ruta: ActivatedRoute) {   }

  ngOnInit(): void {
    this._ruta.params.subscribe( params => {
      this.categoria = params['get']('id');
      this.obtenerUna(this.categoria);
    }

    );

  }

  obtenerUna(idCategoria: string){
    this._categoriaService.getUnaCategoria(+idCategoria).subscribe( res => {
      this.datos = res;
    });
  }


}
