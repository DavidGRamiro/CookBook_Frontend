import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categorias.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private _http:HttpClient) { }

    //Hay que tipar el objeto, tipo string
    private endPoint:string = 'http://localhost:8080';

    //Hay que tipar también la llamada
    getTodasCategorias():Observable<Categoria[]> {
      const url = `${this.endPoint}/recetas/categorias`;
      return this._http.get<Categoria[]>(url);
    }

    //Una categoría
    getUna(idCategoria:number):Observable<Categoria> {
      const url = `${this.endPoint}/recetas/categorias/${idCategoria}`;
      return this._http.get<Categoria>(url);
    }
}
