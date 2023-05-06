import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { VerTodasComponent } from './pages/ver-todas/ver-todas.component';
import { VerUnaComponent } from './pages/ver-una/ver-una.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  VerTodasComponent,
  VerUnaComponent
],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule
  ],
  exports: [
    VerTodasComponent,
    VerUnaComponent
  ]
})

export class CategoriasModule { }
