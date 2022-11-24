import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilterPropertiesComponent } from './customer-filter-properties.component';

describe('CustomerFilterPropertiesComponent', () => {
  let component: CustomerFilterPropertiesComponent;
  let fixture: ComponentFixture<CustomerFilterPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFilterPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFilterPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
