import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORTS DE BOTONES
// import { ButtonModule } from 'primeng/button';
//
//  IMPORTS DE INPUTS.
//  import { InputTextModule } from 'primeng/inputtext';

// ESTE MODUILPO RECOGERA TODOS LOS MODULOS QUE VAYAMOS A UTILIZAR EN ESTA LIBRERIA.
// SERIA RECOMENDABLE , PARA EVITAR REPETIR IMPORTACIONES, CLASIFICARLOS CON COMENTARIOS.

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // Tenemos que exportar los modulos declarados, si no no podremos utilizarlos en otros modulos
    // ButtonModule,
    // InputTextModule
  ]
})
// Como cualquier modulo que importemos, tenemos que declararlo. en los imports.

export class PrimeNGModule { }
