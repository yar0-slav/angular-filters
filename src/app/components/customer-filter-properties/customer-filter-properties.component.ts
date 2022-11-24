import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-filter-properties',
  templateUrl: './customer-filter-properties.component.html',
  styleUrls: ['./customer-filter-properties.component.scss']
})
export class CustomerFilterPropertiesComponent implements OnInit {
  parentForm: any;
  @Input() filters : any;
  @Input('filtersIndex') i: any;
  @Input() eventProperties: any;

  constructor( public controlContainer: ControlContainer ) {}

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control;
  }

  getEventProperties(i: number) {
    return this.filters.at(i).get('eventProperties') as FormArray;
  }

}
