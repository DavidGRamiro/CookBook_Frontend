import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, Receta } from '../interfaces/categorias.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private _http:HttpClient) { }

    //Hay que tipar el objeto, tipo string
    private endPoint:string = 'http://localhost:8080';
    private common : string = "/recetas";

    //Hay que tipar también la llamada
    getTodasCategorias():Observable<Categoria[]> {
      const url = `${this.endPoint}/recetas/categorias`;
      return this._http.get<Categoria[]>(url);
    }

    //Una categoría
    getUna(id:number):Observable<Categoria> {
      const url = `${this.endPoint}/recetas/categorias/${id}`
      const params = new HttpParams().set('idCategoria', id)
      return this._http.get<Categoria>(url, { params });
    }

    recetasPorCategoria( idCategoria: number): Observable<Receta[]>{
      const url = `${ this.endPoint }${ this.common }/porIdCategoria`
      const params = new HttpParams().set('idCategoria', idCategoria)
      return this._http.get<Receta[]>(url, { params })
    }
}
