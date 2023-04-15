import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PrimeNGModule } from '../library/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    // Si no importamos el módulo de Auth.Routing, como va a saber las rutas hijas referentes a AUTH que tiene que cargar nuestra aplicación ??
    AuthRoutingModule,
    PrimeNGModule // Este modulo hace referencia a //library -> PrimeNG. Ir a esta directiva para entenderlo. // Dentro de AUTH y sus componentes
                  // podemos utilizar los declarados dentro de este modulo.
  ],
  exports: []
})
export class AuthModule { }

// Autmáticamente, los componentes que creemos dentro de el directorio Auth -> Pages, se importarán en Auth.Module.
// Tenemos importados el Auth Routing Module, que será el módulo que se encarge de definir las rutas de los componentes declarados en AUTH.
// Para poder acceder a las rutas declaradas en nuestro Auth.routig.module, tenemos que exportar la clase Auth.Module. Que es está.
// ¿Donde la IMPORTAMOS? En el modulo padre de la aplicación, que es App.Module.
