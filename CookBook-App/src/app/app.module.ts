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
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminModule } from './admin/admin.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './auth/interceptors/auth-interceptor.interceptor';

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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
