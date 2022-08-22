import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    TableModule
  ]
})
export class PrimeNgModule { }
