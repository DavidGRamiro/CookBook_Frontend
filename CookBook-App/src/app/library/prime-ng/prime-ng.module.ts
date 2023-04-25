import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';

@NgModule({
  exports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    DividerModule,
    CardModule,
    PasswordModule,
    ToastModule,
    TableModule,
    RatingModule
  ]
})

export class PrimeNGModule { }
