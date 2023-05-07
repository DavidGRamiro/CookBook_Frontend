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
import { MultiSelectModule } from 'primeng/multiselect';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { SpeedDialModule } from 'primeng/speeddial';
import { AvatarModule } from 'primeng/avatar';
import { TabViewModule } from 'primeng/tabview';

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
    RatingModule,
    MultiSelectModule,
    MessagesModule,
    DropdownModule,
    SpeedDialModule,
    AvatarModule,
    TabViewModule
    

  ]
})

export class PrimeNGModule { }
