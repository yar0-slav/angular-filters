import { Component, Input, OnInit} from '@angular/core';
import { ControlContainer } from '@angular/forms';


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  parentForm: any;

  constructor( public controlContainer: ControlContainer ) {}

  operators: any = [
    {
      type: 'string',
      values: [
        'equals',
        'does not contain',
        'contains',
        'does not contains'
      ]
    },
    {
      type: 'number',
      values: [
        'equal to',
        'in between',
        'less than',
        'greater than',
      ]
    }
  ]


  ngOnInit(): void {
    this.parentForm = this.controlContainer.control;

  }

}
