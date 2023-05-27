import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlanService } from '../../services/plan.service';
import { Receta } from 'src/app/recetas/interface/recetas.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ver-recetas',
  templateUrl: './ver-recetas.component.html',
  styleUrls: ['./ver-recetas.component.css'],
})
export class VerRecetasComponent implements OnInit {

  public recetasPorPlan: Receta[] = [];
  public idPlan! : number;

  //BreadCrumb
  items: MenuItem[] = [];
  home!: MenuItem;

  ngOnInit(): void {
    this.idPlan = this._activateRoute.snapshot.params["idPlan"]
    this.obtenerRecetasPorPlan(this.idPlan);

    this.items = [{ label: 'Planes', routerLink:'/planes/todos' }, { label: 'Recetas de plan' }]
    this.home = { icon: 'pi pi-home', routerLink: '/home' }
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
