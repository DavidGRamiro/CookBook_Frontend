import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  {
    path: '',
      children:
      [
        { path: '', component: IndexComponent },
        { path: '**', redirectTo: 'home' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
