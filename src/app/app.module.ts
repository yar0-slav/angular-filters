import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterPropertiesComponent } from './components/filter-properties/filter-properties.component';
import { FilterStepsComponent } from './components/filter-steps/filter-steps.component';
import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';

import { StepPropertyOperatorComponent } from './components/step-property-operator/step-property-operator.component';
import { FilterStepPropertyComponent } from './components/filter-step-property/filter-step-property.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { OperatorsComponent } from './components/operators/operators.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerFilterComponent,
    FilterStepsComponent,
    FilterPropertiesComponent,
    StepPropertyOperatorComponent,
    FilterStepPropertyComponent,
    OperatorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
