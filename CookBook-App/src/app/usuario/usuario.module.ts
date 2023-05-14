import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MisRecetasComponent } from './pages/mis-recetas/mis-recetas.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { ListboxModule } from 'primeng/listbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';



@NgModule({
  declarations: [
    MisRecetasComponent,
    NotificacionesComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    PrimeNGModule,
    SharedModule,
    ListboxModule,
    ProgressBarModule,
    PanelModule,
    BadgeModule
  ],
  exports:[
    MisRecetasComponent,
    NotificacionesComponent,
    PerfilComponent
  ]
})

export class UsuarioModule { }
