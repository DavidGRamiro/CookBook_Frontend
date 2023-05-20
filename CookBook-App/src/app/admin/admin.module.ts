import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditRecetaComponent } from './components/edit-receta/edit-receta.component';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { SharedModule } from '../shared/shared.module';
import { UsuariosAdminComponent } from './components/usuarios-admin/usuarios-admin.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { EnviarNotificacionComponent } from './components/enviar-notificacion/enviar-notificacion.component';


@NgModule({
  declarations: [
    EditRecetaComponent,
    EstadisticasComponent,
    UsuariosAdminComponent,
    EnviarNotificacionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    UsuarioModule
  ],
  exports: [
  ]
})
export class AdminModule { }
