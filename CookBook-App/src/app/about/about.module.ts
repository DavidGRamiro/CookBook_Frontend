import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FaqsComponent } from './pages/faqs/faqs.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactoComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports:[
    AboutComponent,
    ContactoComponent,
    FaqsComponent
  ]
})
export class AboutModule { }
