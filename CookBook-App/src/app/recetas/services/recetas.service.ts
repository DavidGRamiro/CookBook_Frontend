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

  // Da de alta un comentario.
  altaComentario( comentario: Comentario, idReceta: number, idUsuario: number) : Observable<Comentario>{
    const url = `${this.endPoint}${this.common}/alta/comentario`
    const params = new HttpParams().set('idReceta', idReceta)
                                  .set('idUsuario', idUsuario);
    return this._http.post<Comentario>(url, comentario, { params });
  }

  //Elimina una receta por su ID.
  eliminarReceta( idReceta: number): Observable<void>{
    const url = `${this.endPoint}${this.common}/eliminar`
    const params = new HttpParams().set('idReceta',idReceta);
    return this._http.delete<void>(url, { params });
  }

  //Actualiza una receta por su ID.
  editarReceta( receta : Receta){
    const url = `${this.endPoint}${this.common}/update`
    return this._http.put<Receta>(url,receta);
  }

  //Añadir una receta a favoritos.
  addFavorita(idUsuario: number, idReceta: number, ): Observable<Receta>{
    const url = `${this.endPoint}/favoritos/add`
    let params = new HttpParams();
    params = params.append('idUsuario', idUsuario);
    params = params.append('idReceta', idReceta);
    return this._http.post<Receta>(url, {}, { params: params });
  }

  eliminarFavorita(idUsuario: number, idReceta: number): Observable<boolean>{
    const url = `${this.endPoint}/favoritos/delete`
    let params = new HttpParams();
    params = params.append('idUsuario', idUsuario);
    params = params.append('idReceta', idReceta);
    return this._http.delete<boolean>(url, { params: params });
  }

  //Verificamos si una receta es favorita o no.
  esFavorita(idUsuario: number, idReceta: number): Observable<boolean>{
    const url = `${this.endPoint}/favoritos/esFavorita`
    let params = new HttpParams();
    params = params.append('idUsuario', idUsuario);
    params = params.append('idReceta', idReceta);
    return this._http.get<boolean>(url, { params: params });
  }

}
