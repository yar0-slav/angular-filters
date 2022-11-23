import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomerFilterComponent } from './customer-filter/customer-filter.component';
import { CustomerFilterFiltersComponent } from './customer-filter-filters/customer-filter-filters.component';
import { CustomerFilterStepComponent } from './customer-filter-step/customer-filter-step.component';

import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AppComponent, CustomerFilterComponent, CustomerFilterFiltersComponent, CustomerFilterStepComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatCardModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
