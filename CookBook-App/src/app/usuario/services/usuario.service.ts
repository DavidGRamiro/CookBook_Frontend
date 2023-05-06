import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta, Usuario } from 'src/app/recetas/interface/recetas.interface';

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
}
