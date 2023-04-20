import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LogoutComponent } from './pages/logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AuthRoutingModule,
    PrimeNGModule,
  ],
  exports:[
    LoginComponent,
    RegistroComponent,
    LogoutComponent,
  ]
})
export class AuthModule { }
