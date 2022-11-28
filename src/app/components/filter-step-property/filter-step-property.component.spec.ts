import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStepPropertyComponent } from './filter-step-property.component';

describe('FilterStepPropertyComponent', () => {
  let component: FilterStepPropertyComponent;
  let fixture: ComponentFixture<FilterStepPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStepPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterStepPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
