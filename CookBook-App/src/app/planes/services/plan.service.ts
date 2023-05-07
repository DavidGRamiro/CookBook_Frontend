import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Plan } from '../interfaces/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private endPoint: string = "http://localhost:8080";
  private common : string = "/planes"

  constructor( private _http: HttpClient) { }

   //Petición para obtener todos los planes
   todosPlanes(): Observable<Plan[]> {
    const url = `${ this.endPoint }${ this.common }/todos`
    return this._http.get<Plan[]>(url);
  } 
}
