import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerFilterComponent } from './customer-filter/customer-filter.component';
import { CustomerFilterFiltersComponent } from './customer-filter-filters/customer-filter-filters.component';
import { CustomerFilterStepComponent } from './customer-filter-step/customer-filter-step.component';

@NgModule({
  declarations: [AppComponent, CustomerFilterComponent, CustomerFilterFiltersComponent, CustomerFilterStepComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatSlideToggleModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
