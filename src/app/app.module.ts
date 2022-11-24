import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterStepsComponent } from './components/filter-steps/filter-steps.component';
import { FilterContainerComponent } from './components/filter-container/filter-container.component';
import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FilterStepsOperatorsComponent } from './components/filter-steps-operators/filter-steps-operators.component';
import { FilterStepsPropertiesComponent } from './components/filter-steps-properties/filter-steps-properties.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerFilterComponent,
    FilterContainerComponent,
    FilterStepsComponent,
    FilterStepsOperatorsComponent,
    FilterStepsPropertiesComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
