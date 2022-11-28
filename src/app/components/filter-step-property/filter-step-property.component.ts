import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormArray } from '@angular/forms';

@Component({
  selector: 'app-filter-step-property',
  templateUrl: './filter-step-property.component.html',
  styleUrls: ['./filter-step-property.component.scss']
})
export class FilterStepPropertyComponent implements OnInit {
  parentForm: any;
  @Input() filters : any;
  @Input() filtersIndex: any;
  @Input() filteredEventProperties: any;

  constructor( public controlContainer: ControlContainer ) {}

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control;
  }

  getEventProperties(i: number) {
    return this.filters.at(i).get('eventProperties') as FormArray;
  }

}
