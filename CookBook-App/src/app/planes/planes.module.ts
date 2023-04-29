import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { VerTodosComponent } from './pages/ver-todos/ver-todos.component';
import { VerUnoComponent } from './pages/ver-uno/ver-uno.component';


@NgModule({
  declarations: [
    VerTodosComponent,
    VerUnoComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule,

  ],
  exports:[
    VerTodosComponent,
    VerUnoComponent
  ]
})
export class PlanesModule { }
