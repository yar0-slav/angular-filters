import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerFilterStepComponent } from './components/customer-filter-step/customer-filter-step.component';
import { CustomerFilterFiltersComponent } from './components/customer-filter-filters/customer-filter-filters.component';
import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CustomerFilterOperatorsComponent } from './components/customer-filter-operators/customer-filter-operators.component';
import { CustomerFilterPropertiesComponent } from './components/customer-filter-properties/customer-filter-properties.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerFilterComponent,
    CustomerFilterFiltersComponent,
    CustomerFilterStepComponent,
    CustomerFilterOperatorsComponent,
    CustomerFilterPropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
