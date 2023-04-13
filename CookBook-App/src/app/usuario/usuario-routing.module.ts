import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { MisRecetasComponent } from './pages/mis-recetas/mis-recetas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'notificaciones', component: NotificacionesComponent },
      { path: 'misrecetas', component: MisRecetasComponent },
      { path: '**', redirectTo: 'perfil' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
