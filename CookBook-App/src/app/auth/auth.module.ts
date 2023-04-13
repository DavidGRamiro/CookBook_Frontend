import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [

  ]
})
export class AuthModule { }

//En este modulo se declaran todos los compoenentes que tenemos dentro de la carpeta auth, y este módulo se importará en el app.module.ts del proyecto.
