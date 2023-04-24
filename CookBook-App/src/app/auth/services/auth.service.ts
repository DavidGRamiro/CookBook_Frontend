import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interface/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private endPoint: string = 'http://localhost:8080';

  constructor( private _http: HttpClient) { }

  //Petición que recupera todos los usuarios.
  obtenerTodos() : Observable<Usuario[]> {
    const url = `${this.endPoint}/usuario/todos`;
    return this._http.get<Usuario[]>(url);
  }

  //Petición que valida si usuario existe.
  obtenerUno( user: Usuario): Observable<Usuario>{
    const url = `${this.endPoint}/usuario/loginValidation`;
    return this._http.post<Usuario>(url,user);
  }

  //Petición de alta de nuevo usuario
  altaUsuario(user : Usuario){
    const url = `${this.endPoint}/usuario/register`
    return this._http.post<Usuario>(url,user);
  }
}
