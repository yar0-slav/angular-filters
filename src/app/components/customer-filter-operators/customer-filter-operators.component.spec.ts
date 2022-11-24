import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilterOperatorsComponent } from './customer-filter-operators.component';

describe('CustomerFilterOperatorsComponent', () => {
  let component: CustomerFilterOperatorsComponent;
  let fixture: ComponentFixture<CustomerFilterOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFilterOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFilterOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
