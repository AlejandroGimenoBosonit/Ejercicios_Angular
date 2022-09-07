import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { ParentComponent } from './pages/comunication/parent/parent.component';
import { CounterComponent } from './pages/counter/counter.component';
import { CrudComponent } from './pages/crud/crud.component';
import { DisplayHideComponent } from './pages/display-hide/display-hide.component';
import { LightSwitchComponent } from './pages/light-switch/light-switch.component';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';

const routes: Routes = [
  { path: 'display-hide', component: DisplayHideComponent },
  { path: 'comunication', component: ParentComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'search-on-type', component: SearchOnTypeComponent },
  { path: 'light-switch', component: LightSwitchComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'counter', component: CounterComponent },
  { path: '**', redirectTo: 'display-hide' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
