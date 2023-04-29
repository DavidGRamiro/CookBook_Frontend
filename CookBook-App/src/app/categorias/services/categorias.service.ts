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

    getUnaCategoria(categoria: string):Observable<Categoria>{
      const url = `${this.endPoint}/recetas/porCategoria`;
      const params = new HttpParams().set('categoria', categoria);
      return this._http.get<Categoria>(url, {params});
    }

    getRecetasPorCategoria( categoria: string): Observable<Receta[]>{
      const url = `${ this.endPoint }${ this.common }/porCategoria`
      const params = new HttpParams().set('categoria', categoria)
      return this._http.get<Receta[]>(url, { params })
    }
}
