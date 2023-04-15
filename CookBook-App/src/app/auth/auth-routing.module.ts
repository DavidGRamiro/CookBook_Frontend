import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

// Definimos, dentro del componente, las rutas hijas, que serán las que se llamarán desde el componente principal de la app.
// En este caso, queremos que navege a login y registro, y llamamos a sus componentes correspondientes.
// Por encima de este componente de routing, esta el app.routing.module.ts, que es el principal de la app.
// Por defecto, siempre va a estar por vacio, a no ser que se lo indiquemos. Si se lo indicamos navegará a cada componente,
// si no, evaluara cada PATH y si no lo encuentra entrará en '**' (cualquier otro) y hara redirrect a login.

// Una vez declaradas las rutas hijas, tenemos que hacerle saber a nuestra app.routing.module.ts, que tiene que cargar este modulo de rutas hijas.
// Moveros ahora a aap.routing.module.ts

// Probad a cambiar la ruta declarada antes de children, y haced un ng serve, veis como funciona.

const routes: Routes = [

  {path: '', children: [
    { path:'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', redirectTo: 'login' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //Estas son las rutas hijas dentro del modulo de Autenticación, que llamaremos a través de app.routing.module.ts principal de la app
  exports: [RouterModule]
})
export class AuthRoutingModule { }
