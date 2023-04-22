import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [

  {path: '', children: [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', redirectTo: 'login' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //Estas son las rutas hijas dentro del modulo de Autenticación, que llamaremos a través de app.routing.module.ts principal de la app
  exports: [RouterModule]
})
export class AuthRoutingModule { }
