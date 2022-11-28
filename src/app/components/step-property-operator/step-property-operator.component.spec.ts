import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPropertyOperatorComponent } from './step-property-operator.component';

describe('StepPropertyOperatorComponent', () => {
  let component: StepPropertyOperatorComponent;
  let fixture: ComponentFixture<StepPropertyOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepPropertyOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepPropertyOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
