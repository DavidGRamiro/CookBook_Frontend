import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerderPesoComponent } from './pages/perder-peso/perder-peso.component';
import { GanarPesoComponent } from './pages/ganar-peso/ganar-peso.component';
import { SaludableComponent } from './pages/saludable/saludable.component';
import { PlanesComponent } from './pages/planes/planes.component';

const routes: Routes = [

  {
    path: '',
      children: [
        { path: '', component: PlanesComponent},
        { path: 'perdida', component: PerderPesoComponent },
        { path: 'ganar', component: GanarPesoComponent },
        { path: 'saludable', component: SaludableComponent },
        { path: '**', redirectTo: '' }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
