import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Aquí gestionaremos las llamadas a las rutas hijas por lazyload.
// Este archivo es el que va a gestionar las rutas padres sobre las hijas.
// Nuestra ruta padre, por defecto, es la que declaramos aqui, que por ejemplpo es auth.
// Cuando entre la ruta en auth, Angular sabra que tiene una referencia a otro modulo, que tiene una serie de rutas hijas.
// PJ: El usuario navega a auth/... y no pone nada, por defecto ( Si recordamos en nuestro archivo de auth.routing.module),
// entra por vacío, y hara un redirect a login. Si pone algo, por ejemplo auth/ registro, le llevara al componente de registro.

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'recetas', loadChildren: () => import('./recetas/recetas.module').then(m => m.RecetasModule) },
  { path: 'user', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'planes', loadChildren: () => import('./planes/planes.module').then(m => m.PlanesModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

