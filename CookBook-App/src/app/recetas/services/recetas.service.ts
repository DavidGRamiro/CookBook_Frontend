import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria, Comentario, Receta } from '../interface/recetas.interface';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private endPoint: string = "http://localhost:8080";
  private common : string = "/recetas"

  constructor( private _http: HttpClient) { }


  //Petición para obtener todas las categorias disponibles
  todasCategorias(): Observable<Categoria[]> {
    const url = `${ this.endPoint }${ this.common }/categorias`
    return this._http.get<Categoria[]>(url);
  }

  //Petición para obtener todas las recetas
  todasRecetas(): Observable<Receta[]>{
    const url = `${ this.endPoint }${ this.common }/todas`
    return this._http.get<Receta[]>(url)
  }

  //Petición para obtener recetas a partir de una categoría introducida por parámetro.
  recetaPorCategoria( categoria: string): Observable<Receta[]>{
    const url = `${ this.endPoint }${ this.common }/porCategoria`
    const params = new HttpParams().set('categoria', categoria)
    return this._http.get<Receta[]>(url, { params })
  }

  //Peticion para buscar una receta por un ingrediente en específico.
  recetaPorIngrediente( ingrediente: string): Observable<Receta[]>{
    const url = `${ this.endPoint }${ this.common }/porIngrediente`
    const params = new HttpParams().set('ingrediente', ingrediente)
    return this._http.get<Receta[]>(url, { params })
  }

  //Obetner una receta por su ID.
  obtenerUnaReceta( id: number): Observable<Receta>{
    const url = `${ this.endPoint }${ this.common }/una`
    const params = new HttpParams().set('idReceta', id);
    return this._http.get<Receta>(url,{ params })
  }

  //Obtener los comentarios de una receta por su ID.
  obtenerComentarios( id:number): Observable<Comentario[]>{
    const url = `${ this.endPoint }${ this.common }/comentarios`
    const params = new HttpParams().set('idReceta', id)
    return this._http.get<Comentario[]>(url, { params })
  }

  // Da de alta una receta.
  altaReceta( receta: Receta ): Observable<Receta>{
    const url = `${ this.endPoint }${ this.common }/alta`
    return this._http.post<Receta>(url,receta);
  }
}
