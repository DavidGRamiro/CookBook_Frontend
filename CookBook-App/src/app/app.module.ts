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
import { PerfilComponent } from './usuario/pages/perfil/perfil.component';
import { MisRecetasComponent } from './usuario/pages/mis-recetas/mis-recetas.component';
import { NotificacionesComponent } from './usuario/pages/notificaciones/notificaciones.component';
import { UsuarioModule } from './usuario/usuario.module';
import { LibraryModule } from './library/library.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Modulos de Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,

    //Creados por nosotros
    AuthModule,
    SharedModule,
    RecetasModule,
    UsuarioModule,
    LibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
