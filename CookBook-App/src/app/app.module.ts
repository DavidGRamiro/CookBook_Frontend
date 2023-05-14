import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { RecetasModule } from './recetas/recetas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PlanesModule } from './planes/planes.module';
import { CategoriasModule } from './categorias/categorias.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Módulos propios de Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,

    //Módulos creados por nosotros
    AuthModule,
    SharedModule,
    PlanesModule,
    RecetasModule,
    UsuarioModule,
    CategoriasModule,
    HomeModule,
    AdminModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
