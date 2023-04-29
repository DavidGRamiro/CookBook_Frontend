import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingrediente } from '../interfaces/share.interface';

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
}
