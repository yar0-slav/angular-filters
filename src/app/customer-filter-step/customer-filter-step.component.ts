import { Component, OnInit } from '@angular/core';
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
  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  getSelectedEventProperties() {
    console.log(this.selectedEvent);
    const { data: { events } } = this.events;
    const filtered = events.filter(
      (option: { type: string }) => option.type === this.selectedEvent
    );
    console.log(filtered[0].properties);
    this.eventProperties = filtered[0].properties;
    return filtered[0].properties;
  }

  currentlySelectedEvent(e: string) {
    console.log(this.selectedEvent);
    return e;
  }

  fetchData(): void {
    this.filtersService
      .getFiltersData()
      .pipe(take(1))
      .subscribe((data) => (this.events = data));
  }
}
