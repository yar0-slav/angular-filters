import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';


@Component({
  selector: 'app-filter-steps-operators',
  templateUrl: './filter-steps-operators.component.html',
  styleUrls: ['./filter-steps-operators.component.scss']
})
export class FilterStepsOperatorsComponent implements OnInit  {
  parentForm: any;
  inputFormControl = new FormControl('');

  constructor( public controlContainer: ControlContainer ) {}

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control;
  }

}
