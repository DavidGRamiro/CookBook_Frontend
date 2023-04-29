import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerTodasComponent } from './pages/ver-todas/ver-todas.component';
import { VerUnaComponent } from './pages/ver-una/ver-una.component';

const routes: Routes = [
  {
    path: '',
      children:
      [
        { path: 'todas', component: VerTodasComponent },
        { path: ':categoria', component: VerUnaComponent },
        { path: '**', redirectTo: 'todas' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule {
}
