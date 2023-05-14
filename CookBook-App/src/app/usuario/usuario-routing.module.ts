import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MisRecetasComponent } from './pages/mis-recetas/mis-recetas.component';
import { LogoutComponent } from '../auth/pages/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'misrecetas', component: MisRecetasComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
