import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LogoutComponent } from '../auth/pages/logout/logout.component';
import { PlannerComponent } from '../shared/pages/planner/planner.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'planificador', component: PlannerComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
