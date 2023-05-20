import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario, Receta, Usuario } from 'src/app/recetas/interface/recetas.interface';
import { UsuarioConPlan } from '../interface/usuarioconplan.interface';
import { Notificacion } from '../interface/notificacion.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private endPoint: string = "http://localhost:8080";
  private common : string = "/usuario"


  constructor (private _http: HttpClient) { }

  //Petición para obtener un usuario por su ID.
  getUserById(idUsuario: number): Observable<Usuario>{
    const url = `${ this.endPoint }${ this.common }/uno`
    const params = new HttpParams().set('idUsuario', idUsuario)
    return this._http.get<Usuario>(url, { params })
  }

  //Petición para obtener las recetas favoritas de un usuario.
  getRecetasFavoritas(idUsuario: number): Observable<Receta[]>{
    const url = `${ this.endPoint }/favoritos/porIdUsuario`
    const params = new HttpParams().set('idUsuario', idUsuario)
    return this._http.get<Receta[]>(url, { params })
  }

  //Peticion para obtener el estado de un plan de un usuario.
  getPlandeUsuario(idUsuario: number): Observable<UsuarioConPlan>{
    const url = `${ this.endPoint }${ this.common }/conPlan`
    const params = new HttpParams().set('idUsuario', idUsuario)
    return this._http.get<UsuarioConPlan>(url, { params })
  }

  //Recogemos las notificaciones de un usuario.
  getNotificaciones(idUsuario: number): Observable<Notificacion[]>{
    const url = `${ this.endPoint }${ this.common }/notificaciones`
    const params = new HttpParams().set('idUsuario', idUsuario)
    return this._http.get<Notificacion[]>(url, { params })
  }

  //Método post para actualizar el estado de una notificacion ya leida
  updateNotificacion(idNotificacion: number): Observable<Notificacion>{
    const url = `${ this.endPoint }${ this.common }/notificacion`
    const params = new HttpParams().set('idNotificacion', idNotificacion)
    return this._http.post<Notificacion>(url, { params })
  }

  //Recupera todos los usuarios registrados en la aplicación
  getTodosUsuarios(): Observable<Usuario[]>{
    const url = `${ this.endPoint }${ this.common }/todos`
    return this._http.get<Usuario[]>(url);
  }

  //Eliminar un usuario
  deleteUsuario(idUsuario: number){
    const url = `${ this.endPoint }${ this.common }/eliminar`
    const params = new HttpParams().set('idUsuario', idUsuario)
    return this._http.delete(url, { params, responseType: 'text' })
  }

  //Eliminar todos los comentarios asociados a un usuario
  deleteComentariosUsuarios( idUsuario : number){
    const url = `${ this.endPoint }${ this.common }/eliminar/comentarios`
    const params = new HttpParams().set('idUsuario', idUsuario);
    return this._http.delete(url, { params, responseType: 'text' })
  }

  //Eliminar un comentario de usuario
  eliminarComentario( idComentario: number){
    const url = `${this.endPoint}${this.common}/eliminar/uno`;
    const params = new HttpParams().set('idComentario', idComentario);
    return this._http.delete(url, { params, responseType: 'text' })
  }

}
