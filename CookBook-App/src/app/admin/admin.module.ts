import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditRecetaComponent } from './components/edit-receta/edit-receta.component';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EditRecetaComponent,
    EstadisticasComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    EditRecetaComponent
  ]
})
export class AdminModule { }
