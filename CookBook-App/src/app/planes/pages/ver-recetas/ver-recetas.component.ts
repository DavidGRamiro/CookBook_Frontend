import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { PlanService } from '../../services/plan.service';
import { Receta } from 'src/app/recetas/interface/recetas.interface';

@Component({
  selector: 'app-ver-recetas',
  templateUrl: './ver-recetas.component.html',
  styleUrls: ['./ver-recetas.component.css'],
})
export class VerRecetasComponent implements OnInit {

  public recetasPorPlan: Receta[] = [];
  public idPlan! : number;

  ngOnInit(): void {
    this.idPlan = this._activateRoute.snapshot.params["idPlan"]
    console.log(this.idPlan)
    this.obtenerRecetasPorPlan(this.idPlan); 
  }

  constructor(
    private _planService: PlanService,
    private _activateRoute: ActivatedRoute
  ) {}



  obtenerRecetasPorPlan(idPlan: number) {
    this._planService.recetasPorPlan(idPlan).subscribe((res) => {
      this.recetasPorPlan = res;
    });
  }
}
