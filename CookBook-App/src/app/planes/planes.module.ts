import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { VerTodosComponent } from './pages/ver-todos/ver-todos.component';
import { VerUnoComponent } from './pages/ver-uno/ver-uno.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    VerTodosComponent,
    VerUnoComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule,
    SharedModule,
    PrimeNGModule

  ],
  exports:[
    VerTodosComponent,
    VerUnoComponent
  ]
})
export class PlanesModule { }
