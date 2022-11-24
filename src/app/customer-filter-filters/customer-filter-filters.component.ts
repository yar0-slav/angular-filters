import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-filter-filters',
  templateUrl: './customer-filter-filters.component.html',
  styleUrls: ['./customer-filter-filters.component.scss'],
})
export class CustomerFilterFiltersComponent {
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      filters: this.fb.array([
        this.fb.group({
          eventType: [''],
          eventProperties: this.fb.array([
            this.fb.group({
              property: [''],
              type: [''],
              operator: this.fb.group({
                name: [''],
                values: this.fb.array([
                  ['']
                ])
              })
            })
         ])
        }),
      ]),
    });
  }


  onClickSubmit(): void {
    console.log(this.filterForm.getRawValue());
  }

}
