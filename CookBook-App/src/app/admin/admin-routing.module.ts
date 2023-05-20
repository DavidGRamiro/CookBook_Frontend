import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { UsuariosAdminComponent } from './components/usuarios-admin/usuarios-admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'estadisticas', component: EstadisticasComponent},
      { path: 'usuarios', component: UsuariosAdminComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

