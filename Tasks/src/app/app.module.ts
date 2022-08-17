import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';
import { DisplayHideComponent } from './pages/display-hide/display-hide.component';
import { ComunicationComponent } from './pages/comunication/comunication.component';
import { CrudComponent } from './pages/crud/crud.component';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';
import { LightSwitchComponent } from './pages/light-switch/light-switch.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { CounterComponent } from './pages/counter/counter.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
