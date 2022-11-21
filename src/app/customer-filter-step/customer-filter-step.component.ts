import { Component, OnInit } from '@angular/core';
import { FiltersService } from './../services/filters.service';


@Component({
  selector: 'app-customer-filter-step',
  templateUrl: './customer-filter-step.component.html',
  styleUrls: ['./customer-filter-step.component.scss']
})
export class CustomerFilterStepComponent implements OnInit  {

  customerFilters: any;

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.filtersService.getFiltersData().subscribe((res) => {
      this.customerFilters = res;
    })
  }
}
