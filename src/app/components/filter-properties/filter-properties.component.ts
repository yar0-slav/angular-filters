import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormArray } from '@angular/forms';

import { take } from 'rxjs';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-filter-properties',
  templateUrl: './filter-properties.component.html',
  styleUrls: ['./filter-properties.component.scss'],
})
export class FilterPropertiesComponent implements OnInit {
  @Input() filters: any;
  events: any;
  filteredEventProperties: any;
  parentForm: any;

  constructor(public controlContainer: ControlContainer, private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control;
    this.fetchData();
  }

  getSelectedEventProperties(event: any) {
    const {
      data: { events },
    } = this.events;
    const filtered = events.filter(
      (option: { type: string }) => option.type === event.value
    );
    this.filteredEventProperties = filtered[0].properties;
    return filtered[0].properties;
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
