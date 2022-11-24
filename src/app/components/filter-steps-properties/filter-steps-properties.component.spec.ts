import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStepsPropertiesComponent } from './filter-steps-properties.component';

describe('FilterStepsPropertiesComponent', () => {
  let component: FilterStepsPropertiesComponent;
  let fixture: ComponentFixture<FilterStepsPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStepsPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterStepsPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
