import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { NavbarComponent } from '../shared/pages/navbar/navbar.component';
import { FooterComponent } from '../shared/pages/footer/footer.component';


@NgModule({
  declarations: [
    RecetasComponent
  ],
  imports: [
    CommonModule,
    RecetasRoutingModule
  ]
})
export class RecetasModule { }
