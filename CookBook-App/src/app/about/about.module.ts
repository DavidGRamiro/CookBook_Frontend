import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutComponent,
    ContactoComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    PrimeNGModule,
    ReactiveFormsModule
  ],
  exports:[
    AboutComponent,
    ContactoComponent,
    FaqsComponent
  ]
})
export class AboutModule { }
