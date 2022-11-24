import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormArray
} from '@angular/forms';

import { take } from 'rxjs';
import { FiltersService } from 'src/app/services/filters.service';


@Component({
  selector: 'app-customer-filter-step',
  templateUrl: './customer-filter-step.component.html',
  styleUrls: ['./customer-filter-step.component.scss'],
})
export class CustomerFilterStepComponent implements OnInit {
  events: any;
  eventProperties: any;
  parentForm: any;

  constructor(
    private filtersService: FiltersService,
    public controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.parentForm = this.controlContainer.control;
  }

  getSelectedEventProperties(event: any) {
    const {
      data: { events },
    } = this.events;
    const filtered = events.filter(
      (option: { type: string }) => option.type === event.value
    );
    console.log(filtered);
    this.eventProperties = filtered[0].properties;
    return filtered[0].properties;
  }

  get filters() {
    return this.parentForm.get('filters') as FormArray;
  }

  getEventProperties(i: number) {
    return this.filters.at(i).get('eventProperties') as FormArray;
  }

  fetchData(): void {
    this.filtersService
      .getFiltersData()
      .pipe(take(1))
      .subscribe((data) => {
        console.log('api data', data);
        this.events = data;
      });
  }
}
