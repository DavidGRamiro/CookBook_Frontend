import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { VerUnaComponent } from './pages/ver-una/ver-una.component';
import { AlergenosComponent } from './pages/alergenos/alergenos.component';
import { CenasComponent } from './pages/cenas/cenas.component';
import { ComidasComponent } from './pages/comidas/comidas.component';
import { DesayunosComponent } from './pages/desayunos/desayunos.component';
import { NiniosComponent } from './pages/ninios/ninios.component';
import { VeganosComponent } from './pages/veganos/veganos.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AlergenosComponent,
    CenasComponent,
    ComidasComponent,
    DesayunosComponent,
    NiniosComponent,
    RecetasComponent,
    VerUnaComponent,
    VeganosComponent

  ],
  imports: [
    CommonModule,
    RecetasRoutingModule,
    SharedModule,
    PrimeNGModule

  ],
  exports:[
    AlergenosComponent,
    CenasComponent,
    ComidasComponent,
    DesayunosComponent,
    NiniosComponent,
    RecetasComponent,
    VerUnaComponent,
    VeganosComponent
  ],
  providers:[MessageService]
})
export class RecetasModule { }
