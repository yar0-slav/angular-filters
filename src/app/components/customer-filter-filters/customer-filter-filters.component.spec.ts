import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilterFiltersComponent } from './customer-filter-filters.component';

describe('CustomerFilterFiltersComponent', () => {
  let component: CustomerFilterFiltersComponent;
  let fixture: ComponentFixture<CustomerFilterFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFilterFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFilterFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
