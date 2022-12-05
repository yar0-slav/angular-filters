import { FilterStepsComponent } from './../filter-steps/filter-steps.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.scss'],
})
export class CustomerFilterComponent implements OnInit {
  @ViewChild(FilterStepsComponent, { static: true })
  filterSteps!: FilterStepsComponent;

  finalForm: any;
  filterForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      filters: this.fb.array([this.filterSteps.createFilterStep()]),
    });
  }

  // filterForm: FormGroup = this.fb.group({
  //   filters: this.fb.array([
  //     this.fb.group({
  //       eventType: [''],
  //       eventProperties: this.fb.array([
  //         this.fb.group({
  //           property: [''],
  //           type: [''],
  //           operator: this.fb.group({
  //             name: [''],
  //             type: [''],
  //             values: this.fb.array([['']]),
  //           }),
  //         }),
  //       ]),
  //     }),
  //   ]),
  // });

  get filters() {
    return this.filterForm.get('filters') as FormArray;
  }

  deleteFilter(index:number): void {
    this.filters?.removeAt(index);
  }

  addNewFilter(): void {
    this.filters?.push(this.filterSteps.createFilterStep());
  }

  onClickSubmit(): void {
    this.finalForm = this.filterForm.getRawValue();
    console.log(this.filterForm.getRawValue());
  }
}
