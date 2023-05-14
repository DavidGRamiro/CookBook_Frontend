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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioRecipeComponent } from './components/formulario-recipe/formulario-recipe.component';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
    TablaComponent,
    MenuComponent,
    TarjetaComponent,
    TarjetaCategoriaComponent,
    FormularioRecipeComponent,
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MainComponent,
    TablaComponent,
    MenuComponent,
    TarjetaComponent,
    TarjetaCategoriaComponent,
    FormularioRecipeComponent
  ],
  providers: []
})
export class SharedModule { }
