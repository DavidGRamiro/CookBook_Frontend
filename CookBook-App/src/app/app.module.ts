import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

//Creados por nosotros
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { RecetasModule } from './recetas/recetas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PlanesModule } from './planes/planes.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Modulos de Angular
    BrowserModule,
    AppRoutingModule, // Este es el routing global de la aplicación, que se encarga de cargar los path padres y los modulos de rutas hijas.
    BrowserAnimationsModule,
    RouterModule,

    //Creados por nosotros, referentes a cada directiva creada, dentro de ellos están sus propios componentes.
    AuthModule,
    SharedModule,
    PlanesModule,
    RecetasModule,
    UsuarioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
