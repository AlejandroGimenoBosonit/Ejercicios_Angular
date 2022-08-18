import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DisplayHideComponent } from './display-hide/display-hide.component';

import { ParentComponent } from './comunication/parent/parent.component';
import { ChildComponent } from './comunication/child/child.component';

import { CrudComponent } from './crud/crud.component';

import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';

import { LightSwitchComponent } from './light-switch/light-switch.component';

import { ChartsComponent } from './charts/charts.component';

import { CounterComponent } from './counter/counter.component';










import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormComponent } from './crud/components/form/form.component';
import { TableComponent } from './crud/components/table/table.component';


@NgModule({
  declarations: [
    ChartsComponent,
    CounterComponent,
    DisplayHideComponent,
    LightSwitchComponent,
    SearchOnTypeComponent,
    
    ParentComponent,
    ChildComponent,
    CrudComponent,
    FormComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class PagesModule { }
