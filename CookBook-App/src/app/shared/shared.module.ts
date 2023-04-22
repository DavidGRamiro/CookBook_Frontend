import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';

import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';


@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
    TablaComponent,
    MenuComponent,
    TarjetaComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PrimeNGModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MainComponent,
    TablaComponent,
    MenuComponent,
    TarjetaComponent
  ]
})
export class SharedModule { }
