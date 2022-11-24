import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormArray } from '@angular/forms';

import { take } from 'rxjs';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-filter-steps',
  templateUrl: './filter-steps.component.html',
  styleUrls: ['./filter-steps.component.scss'],
})
export class FilterStepsComponent implements OnInit {
  @Input() events: any;
  eventProperties: any;
  parentForm: any;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control;
  }

  getSelectedEventProperties(event: any) {
    const {
      data: { events },
    } = this.events;
    const filtered = events.filter(
      (option: { type: string }) => option.type === event.value
    );
    this.eventProperties = filtered[0].properties;
    return filtered[0].properties;
  }

  get filters() {
    return this.parentForm.get('filters') as FormArray;
  }

  getEventProperties(i: number) {
    return this.filters.at(i).get('eventProperties') as FormArray;
  }
}
