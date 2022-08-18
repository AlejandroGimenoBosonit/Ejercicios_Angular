import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { CounterComponent } from './counter/counter.component';
import { CrudComponent } from './crud/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { ParentComponent } from './comunication/parent/parent.component';
import { ChildComponent } from './comunication/child/child.component';



@NgModule({
  declarations: [
    ChartsComponent,
    CounterComponent,
    CrudComponent,
    DisplayHideComponent,
    LightSwitchComponent,
    SearchOnTypeComponent,
    
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class PagesModule { }
