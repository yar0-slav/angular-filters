import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { take } from 'rxjs';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent implements OnInit {
  events: any;

  constructor(
    private fb: FormBuilder,
    private filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  filterForm: FormGroup = this.fb.group({
    filters: this.fb.array([
      this.fb.group({
        eventType: [''],
        eventProperties: this.fb.array([
          this.fb.group({
            property: [''],
            type: [''],
            operator: this.fb.group({
              name: [''],
              values: this.fb.array([['']]),
            }),
          }),
        ]),
      }),
    ]),
  });

  onClickSubmit(): void {
    console.log(this.filterForm.getRawValue());
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
