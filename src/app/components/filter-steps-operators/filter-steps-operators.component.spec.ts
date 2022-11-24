import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStepsOperatorsComponent } from './filter-steps-operators.component';

describe('FilterStepsOperatorsComponent', () => {
  let component: FilterStepsOperatorsComponent;
  let fixture: ComponentFixture<FilterStepsOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStepsOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterStepsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
