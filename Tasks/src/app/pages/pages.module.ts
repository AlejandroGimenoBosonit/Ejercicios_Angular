import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ChartsComponent } from './charts/charts.component';
import { BarChartComponent } from './charts/components/double-linear-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts/components/doughnut-chart/doughnut-chart.component';
import { LinearChartComponent } from './charts/components/linear-chart/linear-chart.component';
import { ChildComponent } from './comunication/child/child.component';
import { ParentComponent } from './comunication/parent/parent.component';
import { ButtonsComponent } from './counter/components/buttons/buttons.component';
import { CountsComponent } from './counter/components/counts/counts.component';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './crud/components/form/form.component';
import { TableComponent } from './crud/components/table/table.component';
import { CrudComponent } from './crud/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ControllersComponent } from './light-switch/components/controllers/controllers.component';
import { TrafficLightComponent } from './light-switch/components/traffic-light/traffic-light.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { InputComponent } from './search-on-type/components/input/input.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';

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
    InputComponent,
    ControllersComponent,
    TrafficLightComponent,
    LinearChartComponent,
    DoughnutChartComponent,
    BarChartComponent,
    ButtonsComponent,
    CountsComponent,
  ],
  imports: [CommonModule, FormsModule, PrimeNgModule, ReactiveFormsModule],
})
export class PagesModule {}
