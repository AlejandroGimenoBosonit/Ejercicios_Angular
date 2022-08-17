import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { ComunicationComponent } from './comunication/comunication.component';
import { CounterComponent } from './counter/counter.component';
import { CrudComponent } from './crud/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ComunicationChildComponent } from './comunication/comunication-child/comunication-child.component';



@NgModule({
  declarations: [
    ChartsComponent,
    ComunicationComponent,
    CounterComponent,
    CrudComponent,
    DisplayHideComponent,
    LightSwitchComponent,
    SearchOnTypeComponent,
    ComunicationChildComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class PagesModule { }
