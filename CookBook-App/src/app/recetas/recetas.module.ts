import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { VerUnaComponent } from './pages/ver-una/ver-una.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    RecetasComponent,
    VerUnaComponent,

  ],
  imports: [
    CommonModule,
    RecetasRoutingModule,
    SharedModule,
    PrimeNGModule

  ],
  exports:[
    RecetasComponent,
    VerUnaComponent,
  ],
  providers:[MessageService]
})
export class RecetasModule { }
