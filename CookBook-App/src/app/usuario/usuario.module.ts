import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MisRecetasComponent } from './pages/mis-recetas/mis-recetas.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    MisRecetasComponent,
    NotificacionesComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    PrimeNGModule

  ],
  exports:[
    MisRecetasComponent,
    NotificacionesComponent,
    PerfilComponent
  ]
})

export class UsuarioModule { }
