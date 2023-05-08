import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria, Ingrediente, Receta, RecetasConIngrediente } from '../interfaces/share.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private endPoint: string = 'http://localhost:8080'
  private common: string = '/recetas'

  constructor( private _http: HttpClient) { }

  //Recupera todos los ingredientes dados de alta en la BBDD
  obtenerTodos(): Observable<Ingrediente[]> {
    const url = `${ this.endPoint }${ this.common }/ingredientes`;
    return this._http.get<Ingrediente[]>(url)
  }

  // Da de alta un RecetasConIngrediente en la BBDD
  altaRecetaConIngrediente( RecetasConIngrediente: RecetasConIngrediente ): Observable<RecetasConIngrediente>{
    const url = `${ this.endPoint }/ingredientes/altaIngredienteEnReceta`
    console.log(RecetasConIngrediente);
    return this._http.post<RecetasConIngrediente>(url,RecetasConIngrediente);
  }

  //Obtener todas las categorias
  obtenerCategorias(): Observable<Categoria[]>{
    const url = `${ this.endPoint }${ this.common }/categorias`;
    return this._http.get<Categoria[]>(url);
  }

  // Da de alta una receta.
  altaReceta( receta: Receta ): Observable<Receta>{
    const url = `${ this.endPoint }${ this.common }/alta`
    return this._http.post<Receta>(url,receta);
  }

  // Obtener Ingredientes de una receta por ID de receta
  obtenerIngredientesDeReceta( idReceta: number ): Observable<Ingrediente[]>{
    const url = `${ this.endPoint }/ingredientes/porIdReceta`;
    const params = new HttpParams().set('idReceta', idReceta);
    return this._http.get<Ingrediente[]>(url, { params })
  }
}
