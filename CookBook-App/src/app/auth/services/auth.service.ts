import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Usuario } from '../interface/auth.interface';
import { Observable } from 'rxjs';
import { Auth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private endPoint: string = 'http://localhost:8080';
  private common : string = '/usuario';

  constructor( private _http: HttpClient,
                private _fireBase : Auth) { }

  //Petición que recupera todos los usuarios.
  obtenerTodos() : Observable<Usuario[]> {
    const url = `${this.endPoint}${this.common}/todos`;
    return this._http.get<Usuario[]>(url);
  }

  //Petición que valida si usuario existe.
  obtenerUno( user: Usuario): Observable<Usuario>{
    const url = `${this.endPoint}${this.common}/login`;
    return this._http.post<Usuario>(url,user);
  }


  //Petición que loguea el usuario y devuelve el token
  login( user: Usuario ): Observable<HttpResponse<Usuario>>{
    const url = `${this.endPoint}${this.common}/login`;
    return this._http.post<Usuario>(url,user,{ observe: 'response' });
  }

  //Petición de alta de nuevo usuario
  altaUsuario(user : Usuario): Observable<HttpResponse<Usuario>>{
    const url = `${this.endPoint}${this.common}/register`
    return this._http.post<Usuario>(url,user,{ observe: 'response' });
  }

  //Buscar usuario por email
  buscarEmail( email : string):Observable<Usuario>{
    const url = `${this.endPoint}${this.common}/email`
    const params = new HttpParams().set('email', email);
    return this._http.get<Usuario>(url,{ params });
  }

  //Accede al servicio de login con los servicios de Google
  loginByGoogle(){
    return signInWithPopup(this._fireBase, new GoogleAuthProvider)
  }

  //Accede al servicio de login con los servicios de Facebook
  loginByFacebook(){
    return signInWithPopup(this._fireBase, new FacebookAuthProvider)
  }

  //Obtener la imagen del usuario de Google
  setImagenGoogle( idUsuario : number ,imagenURL : string ){
    const url = `${this.endPoint}${this.common}/guardarImagenGoogle`;
    const body = { idUsuario: idUsuario, imagen: imagenURL };
    return this._http.post(url,body);

  }

  //


}
