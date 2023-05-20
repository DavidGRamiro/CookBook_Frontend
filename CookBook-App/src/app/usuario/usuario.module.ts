import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { ListboxModule } from 'primeng/listbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';
import { SingleNotificacionComponent } from './components/single-notificacion/single-notificacion.component';
import { MiPlanComponent } from './components/mi-plan/mi-plan.component';
import { MisRecetasFavComponent } from './components/mis-recetas-fav/mis-recetas-fav.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { MisRecetasComponent } from './components/mis-recetas/mis-recetas.component';



@NgModule({
  declarations: [
    NotificacionesComponent,
    PerfilComponent,
    SingleNotificacionComponent,
    MiPlanComponent,
    MisRecetasFavComponent,
    EditarPerfilComponent,
    MisRecetasComponent
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
    NotificacionesComponent,
    PerfilComponent
  ]
})

export class UsuarioModule { }
