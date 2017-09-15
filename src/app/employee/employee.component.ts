import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  columnspan: string =  'employee details';
  firstname: string = 'mithun';
  lastname: any = 'kumar';
  gender: string = "male";
  age: number = 24;
}
