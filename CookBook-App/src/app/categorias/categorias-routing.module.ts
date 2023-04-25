import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerTodasComponent } from './pages/ver-todas/ver-todas.component';

const routes: Routes = [
  {
    path: '',
      children:
      [
        { path: 'todas', component: VerTodasComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule {
}
