import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-filter-steps',
  templateUrl: './filter-steps.component.html',
  styleUrls: ['./filter-steps.component.scss'],
})
export class FilterStepsComponent implements OnInit {
  parentForm: any;

  constructor(
    public controlContainer: ControlContainer,
    private fb: FormBuilder
  ) {}

  get filters() {
    return this.parentForm.get('filters') as FormArray;
  }

  // addFilterStep() {
  //   this.filters.push(
  //     this.fb.control({
  //       eventType: [''],
  //       eventProperties: this.fb.array([])
  //     })
  //   )
  // }

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control;
  }
}
