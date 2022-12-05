import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlContainer, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-filter-steps',
  templateUrl: './filter-steps.component.html',
  styleUrls: ['./filter-steps.component.scss'],
})
export class FilterStepsComponent implements OnInit {
  parentForm: any;
  filterStep: any;

  @Output()
  deleteFilterStepEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    public controlContainer: ControlContainer,
    private fb: FormBuilder
  ) {}

  get filters() {
    return this.parentForm.get('filters') as FormArray;
  }

  //   specimenFields : FormGroup = this.formBuilder.group({
  //     specimenControls: this.formBuilder.array([
  //     ])
  // });

  // this.fb.group({
  //   eventType: [''],
  //   eventProperties: this.fb.array([
  //     this.fb.group({
  //       property: [''],
  //       type: [''],
  //       operator: this.fb.group({
  //         name: [''],
  //         type: [''],
  //         values: this.fb.array([['']]),
  //       }),
  //     }),
  //   ]),
  // }),

  // this.fb.group({
  //   eventType: [''],
  //   eventProperties: this.fb.array([
  //     this.fb.group({
  //       property: [''],
  //       type: [''],
  //       operator: this.fb.group({
  //         name: [''],
  //         type: [''],
  //         values: this.fb.array([['']]),
  //       }),
  //     }),
  //   ]),
  // });

  createFilterStep() {
    this.filterStep = this.fb.group({
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
    });

    return this.filterStep;
  }

  deleteFilterStep(index: number) {
    this.deleteFilterStepEvent.next(index);
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
