import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilterStepComponent } from './customer-filter-step.component';

describe('CustomerFilterStepComponent', () => {
  let component: CustomerFilterStepComponent;
  let fixture: ComponentFixture<CustomerFilterStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFilterStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFilterStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
