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



@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
