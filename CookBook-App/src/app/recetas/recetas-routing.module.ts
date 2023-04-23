import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlergenosComponent } from './pages/alergenos/alergenos.component';
import { CenasComponent } from './pages/cenas/cenas.component';
import { ComidasComponent } from './pages/comidas/comidas.component';
import { DesayunosComponent } from './pages/desayunos/desayunos.component';
import { NiniosComponent } from './pages/ninios/ninios.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { VeganosComponent } from './pages/veganos/veganos.component';
import { VerUnaComponent } from './pages/ver-una/ver-una.component';

const routes: Routes = [
  {
    path: '',
      children: [
        { path: 'alergenos', component: AlergenosComponent },
        { path: 'cenas', component: CenasComponent },
        { path: 'comidas', component: ComidasComponent },
        { path: 'desayunos', component: DesayunosComponent },
        { path: 'ninios', component: NiniosComponent },
        { path: 'veganos', component: VeganosComponent },
        { path: 'todas', component: RecetasComponent },
        { path: ':id', component: VerUnaComponent },
        { path: '**', redirectTo: 'todas' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }
