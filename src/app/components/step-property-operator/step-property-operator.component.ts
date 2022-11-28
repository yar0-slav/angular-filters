import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-step-property-operator',
  templateUrl: './step-property-operator.component.html',
  styleUrls: ['./step-property-operator.component.scss'],
})
export class StepPropertyOperatorComponent implements OnInit {
  @Input() eventProperties: any;
  parentForm: any;
  inputFormControl = new FormControl('');

  constructor(public controlContainer: ControlContainer) {}

  get valuesControls() {
    return this.parentForm.get('operator.values').controls;
  }

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control;
    console.log(this.valuesControls);
  }
}
