import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerTodosComponent } from './pages/ver-todos/ver-todos.component';

const routes: Routes = [

  {
    path: '',
      children: [
        { path: '', component: VerTodosComponent},
        { path: '**', redirectTo: '' }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
