import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AboutComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
