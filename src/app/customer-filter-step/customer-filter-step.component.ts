import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormControl, FormBuilder } from '@angular/forms';

import { take } from 'rxjs';

import { FiltersService } from './../services/filters.service';

@Component({
  selector: 'app-customer-filter-step',
  templateUrl: './customer-filter-step.component.html',
  styleUrls: ['./customer-filter-step.component.scss'],
})
export class CustomerFilterStepComponent implements OnInit {
  events: any;
  selectedEvent = '';
  eventProperties: any;
  ogForm: any;

  constructor(
    private filtersService: FiltersService,
    public controlContainer: ControlContainer
    ) {}


  ngOnInit(): void {
    this.fetchData();
    this.ogForm = this.controlContainer.control;
  }

  getSelectedEventProperties(event: any) {
    const { data: { events } } = this.events;
    const filtered = events.filter(
      (option: { type: string }) => option.type === event.value
    );
    console.log(filtered);
    this.eventProperties = filtered[0].properties;
    return filtered[0].properties;
  }

  get populatedEvents() {
    return this.ogForm.get('type')
  }


  fetchData(): void {
    this.filtersService
      .getFiltersData()
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);
        this.events = data
      });
  }
}
