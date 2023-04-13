import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlergenosComponent } from './pages/alergenos/alergenos.component';
import { CenasComponent } from './pages/cenas/cenas.component';
import { ComidasComponent } from './pages/comidas/comidas.component';
import { DesayunosComponent } from './pages/desayunos/desayunos.component';
import { NiniosComponent } from './pages/ninios/ninios.component';
import { RecetasComponent } from './pages/recetas/recetas.component';

const routes: Routes = [
  {
    path: '',
      children: [
        { path: 'alergenos', component: AlergenosComponent },
        { path: 'cenas', component: CenasComponent },
        { path: 'comidas', component: ComidasComponent },
        { path: 'desayunos', component: DesayunosComponent },
        { path: 'niños', component: NiniosComponent },
        { path: 'todas', component: RecetasComponent },
        { path: '**', redirectTo: 'todas' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }
