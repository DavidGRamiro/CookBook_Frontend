import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { VerTodasComponent } from './pages/ver-todas/ver-todas.component';
import { VerUnaComponent } from './pages/ver-una/ver-una.component';
import { PostresComponent } from './pages/postres/postres.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  VerTodasComponent,
  VerUnaComponent,
  PostresComponent//FIXME: Susceptible a cambio.
],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule
  ],
  exports: [
    VerTodasComponent,
    VerUnaComponent,
    PostresComponent
  ]
})

export class CategoriasModule { }
