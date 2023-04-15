import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MisRecetasComponent } from './pages/mis-recetas/mis-recetas.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { PerfilComponent } from './pages/perfil/perfil.component';



@NgModule({
  declarations: [
    MisRecetasComponent,
    NotificacionesComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
  ]
})

export class UsuarioModule { }
