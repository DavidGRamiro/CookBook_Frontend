import { Component } from '@angular/core';
import { Receta } from '../../interfaces/categorias.interface';
import { CategoriasService } from '../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-una',
  templateUrl: './ver-una.component.html',
  styleUrls: ['./ver-una.component.css']
})
export class VerUnaComponent {

  public datos!: Receta[];
  public categoria!: string;

  constructor(private _categoriaService: CategoriasService,
              private _activatedRoute: ActivatedRoute) {   }

  ngOnInit(): void {
      this._activatedRoute.params
      .pipe(
        switchMap( ({ categoria }) =>
        this._categoriaService.getRecetasPorCategoria(categoria)))
        .subscribe( response => this.datos = response);

        this._activatedRoute.params
        .subscribe( ({ categoria }) => this.categoria = this.capitalizeFirstLetter(categoria));

      }

      capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }
}
