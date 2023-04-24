import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { VerTodasComponent } from './pages/ver-todas/ver-todas.component';


@NgModule({
  declarations: [
  VerTodasComponent
],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ],

  exports: [
    VerTodasComponent
  ]
})
export class CategoriasModule { }
