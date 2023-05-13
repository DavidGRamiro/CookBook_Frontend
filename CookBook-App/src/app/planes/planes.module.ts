import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { VerTodosComponent } from './pages/ver-todos/ver-todos.component';
import { VerRecetasComponent } from './pages/ver-recetas/ver-recetas.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    VerTodosComponent,
    VerRecetasComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule,
    SharedModule,
    PrimeNGModule

  ],
  exports:[
    VerTodosComponent,
    VerRecetasComponent
  ]
})
export class PlanesModule { }
