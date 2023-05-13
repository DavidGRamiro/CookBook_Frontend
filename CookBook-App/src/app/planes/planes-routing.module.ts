import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerTodosComponent } from './pages/ver-todos/ver-todos.component';
import { VerRecetasComponent } from './pages/ver-recetas/ver-recetas.component';

const routes: Routes = [

  {
    path: '',
      children: [
        { path: 'todos', component: VerTodosComponent},
        { path: ':idPlan', component: VerRecetasComponent}
        
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
