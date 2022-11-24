import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStepsComponent } from './filter-steps.component';

describe('FilterStepsComponent', () => {
  let component: FilterStepsComponent;
  let fixture: ComponentFixture<FilterStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
