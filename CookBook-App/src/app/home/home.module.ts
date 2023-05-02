import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeaturedComponent } from './components/featured/featured.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    IndexComponent,
    HeroComponent,
    FeaturedComponent,
    ObjetivosComponent,
    AcercaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule
  ],
  exports:[
    IndexComponent
  ]
})
export class HomeModule { }
