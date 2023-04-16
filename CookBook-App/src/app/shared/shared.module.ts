import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';

import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PrimeNGModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
