import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRecipeComponent } from './shared/components/formulario-recipe/formulario-recipe.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'recetas', loadChildren: () => import('./recetas/recetas.module').then(m => m.RecetasModule) },
  { path: 'user', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'planes', loadChildren: () => import('./planes/planes.module').then(m => m.PlanesModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'alta', component: FormularioRecipeComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

