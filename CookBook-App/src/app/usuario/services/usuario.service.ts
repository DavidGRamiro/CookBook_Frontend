import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta, Usuario } from 'src/app/recetas/interface/recetas.interface';
import { UsuarioConPlan } from '../interface/usuarioconplan.interface';
import { Notificacion } from '../interface/notificacion.interface';
import { NotificacionDTO } from '../interface/notificaciondto.interface';

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

  //Método post para actualizar el estado de una notificacion a leida
  updateNotificacion(idNotificacion: number): Observable<Notificacion>{
    const url = `${ this.endPoint }${ this.common }/notificacion`
    const params = new HttpParams().set('idNotificacion', idNotificacion)
    return this._http.post<Notificacion>(url, { params })
  }

  //Método para crear una notificación
  createNotificacion(notificacion: Notificacion): Observable<Notificacion>{
    const url = `${ this.endPoint }/notificaciones/crear`
    return this._http.post<Notificacion>(url, notificacion)
  }


}
