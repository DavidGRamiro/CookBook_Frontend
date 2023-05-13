import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Plan } from '../interfaces/plan.interface';
import { Receta } from 'src/app/recetas/interface/recetas.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private endPoint: string = "http://localhost:8080";
  private commonPlanes : string = "/planes"
  private commonRecetas : string = "/recetas"

  constructor( private _http: HttpClient) { }

   //Petición para obtener todos los planes
   todosPlanes(): Observable<Plan[]> {
    const url = `${ this.endPoint }${ this.commonPlanes }/todos`
    return this._http.get<Plan[]>(url);
  }
  
   //Petición para obtener todas las Recetas por Plan
   recetasPorPlan( idPlan: number): Observable<Receta[]> {
    const url = `${ this.endPoint }${ this.commonRecetas }/porIdPlan`
    const params = new HttpParams().set('idPlan', idPlan)
    return this._http.get<Receta[]>(url, { params })
  } 
}
