import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { SaludableComponent } from './pages/saludable/saludable.component';
import { GanarPesoComponent } from './pages/ganar-peso/ganar-peso.component';
import { PerderPesoComponent } from './pages/perder-peso/perder-peso.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { PrimeNgModule } from '../library/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    SaludableComponent,
    GanarPesoComponent,
    PerderPesoComponent,
    PlanesComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule,

  ]
})
export class PlanesModule { }
