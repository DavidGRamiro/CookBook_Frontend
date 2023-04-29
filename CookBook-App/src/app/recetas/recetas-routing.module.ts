import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { VerUnaComponent } from './pages/ver-una/ver-una.component';

const routes: Routes = [
  {
    path: '',
      children: [
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
