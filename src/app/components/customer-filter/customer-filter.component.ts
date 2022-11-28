import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.scss'],
})
export class CustomerFilterComponent {
  finalForm: any;

  constructor(private fb: FormBuilder) {}

  filterForm: FormGroup = this.fb.group({
    filters: this.fb.array([
      this.fb.group({
        eventType: [''],
        eventProperties: this.fb.array([
          this.fb.group({
            property: [''],
            type: [''],
            operator: this.fb.group({
              name: [''],
              type: [''],
              values: this.fb.array([['']]),
            }),
          }),
        ]),
      }),
    ]),
  });

  onClickSubmit(): void {
    this.finalForm = this.filterForm.getRawValue();
    console.log(this.filterForm.getRawValue());
  }
}
