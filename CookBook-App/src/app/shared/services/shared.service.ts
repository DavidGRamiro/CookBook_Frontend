import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingrediente, RecetasConIngrediente } from '../interfaces/share.interface';

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
}
