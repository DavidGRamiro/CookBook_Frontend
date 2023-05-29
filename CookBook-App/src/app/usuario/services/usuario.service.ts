import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta, Comentario } from 'src/app/recetas/interface/recetas.interface';
import { Usuario } from '../interface/usuario.interface';
import { Plan } from '../interface/plan.interface';
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

  getPlan(idPlan: number): Observable<Plan>{
    const url = `${ this.endPoint }/planes/plan`
    const params = new HttpParams().set('idPlan', idPlan)
    return this._http.get<Plan>(url, { params })
  }

  //Recogemos las notificaciones de un usuario.
  getNotificaciones(idUsuario: number): Observable<Notificacion[]>{
    const url = `${ this.endPoint }${ this.common }/notificaciones`
    const params = new HttpParams().set('idUsuario', idUsuario)
    return this._http.get<Notificacion[]>(url, { params })
  }
  //Método para obtener una notificación por su ID
  getNotificacionById(idNotificacion: number): Observable<NotificacionDTO>{
    const url = `${ this.endPoint }/notificaciones/una`
    const params = new HttpParams().set('idNotificacion', idNotificacion)
    return this._http.get<NotificacionDTO>(url, { params })
  }

  //Método post para actualizar el estado de una notificacion a leida
  marcarNotificacionLeida(idNotificacion: number): Observable<Notificacion>{
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
  deleteUsuario(idUsuario: number): Observable<any>{
    const url = `${ this.endPoint }${ this.common }/eliminar/uno`
    const params = new HttpParams().set('idUsuario', idUsuario)
    return this._http.delete(url, { params })
  }

  //Eliminar todos los comentarios asociados a un usuario
  deleteComentariosUsuarios( idUsuario : number): Observable<any>{
    const url = `${ this.endPoint }${ this.common }/eliminar/comentarios`
    const params = new HttpParams().set('idUsuario', idUsuario);
    return this._http.delete(url, { params})
  }

  //Eliminar un comentario de usuario
  eliminarComentario( idComentario: number){
    const url = `${this.endPoint}${this.common}/eliminar/uno`;
    const params = new HttpParams().set('idComentario', idComentario);
    return this._http.delete(url, { params, responseType:  'arraybuffer' })
  }

  //Metodo para actualizar una notificacion
  updateNotificacion(notificacion: NotificacionDTO): Observable<NotificacionDTO>{
    const url = `${ this.endPoint }/notificaciones/actualizar`
    return this._http.put<NotificacionDTO>(url, notificacion)
  }

  //Método para crear una notificación
  createNotificacion(notificacion: Notificacion): Observable<Notificacion>{
    const url = `${ this.endPoint }/notificaciones/crear`
    return this._http.post<Notificacion>(url, notificacion)
  }

  //Eliminar una notificación
  deleteNotificacion(idNotificacion: number): Observable<boolean>{
    const url = `${ this.endPoint }/notificaciones/eliminar`
    const params = new HttpParams().set('idNotificacion', idNotificacion)
    return this._http.delete<boolean>(url, { params })
  }

  //Método para recuperar todas las recetas qe ha creado un usuario
  getRecetasByUsuario(idUsuario: number): Observable<Receta[]>{
    const url = `${ this.endPoint }/recetas/porAutor`
    const params = new HttpParams().set('idUsuario', idUsuario)
    return this._http.get<Receta[]>(url, { params })
  }

  //Método para actualizar la información de un usuario
  updateUsuario(usuario: Usuario): Observable<Usuario>{
    const url = `${ this.endPoint }${ this.common }/actualizar`
    return this._http.put<Usuario>(url, usuario)
  }

  //Método para guardar una imagen de perfil
  saveImagePerfil( idUsuario: number, imagen: File): Observable<Usuario>{
    const url = `${ this.endPoint }${ this.common }/guardarImagen`
    const formData = new FormData();
    formData.append('imagen', imagen, imagen.name);
    formData.append('idUsuario', idUsuario.toString());
    return this._http.post<Usuario>(url, formData)
  }

}
