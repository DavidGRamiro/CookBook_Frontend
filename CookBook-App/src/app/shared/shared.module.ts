import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';
import { DropdownModule } from 'primeng/dropdown';

import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { TarjetaCategoriaComponent } from './components/tarjeta-categoria/tarjeta-categoria.component';
import { FomularioRecetaComponent } from './components/fomulario-receta/fomulario-receta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioRecipeComponent } from './components/formulario-recipe/formulario-recipe.component';


@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
    TablaComponent,
    MenuComponent,
    TarjetaComponent,
    TarjetaCategoriaComponent,
    FomularioRecetaComponent,
    FormularioRecipeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MainComponent,
    TablaComponent,
    MenuComponent,
    TarjetaComponent,
    TarjetaCategoriaComponent,
    FomularioRecetaComponent
  ]
})
export class SharedModule { }
