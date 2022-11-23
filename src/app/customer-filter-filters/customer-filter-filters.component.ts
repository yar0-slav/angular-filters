import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-filter-filters',
  templateUrl: './customer-filter-filters.component.html',
  styleUrls: ['./customer-filter-filters.component.scss'],
})
export class CustomerFilterFiltersComponent {


  constructor(private fb: FormBuilder) {}

  filterForm = this.fb.group({
    filters: this.fb.group({
      type: ['']
    }),
  });
  
}
