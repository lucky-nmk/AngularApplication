import { Component, OnInit, Input, Output } from '@angular/core';
import { IEmployees} from '../employee';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css'],
  providers: [ServiceService]
})
export class EmployeeslistComponent {

  employees: IEmployees[] 
  selectedEmployeeCountRadioButton: string = 'All';

constructor(private _serviceService : ServiceService) {
  this.employees = this._serviceService.getEmployees();
}

ngOnInit() {
  this._serviceService.getEmployees();
}


getTotalEmployeesCount(): number {
  return this.employees.length;
}
getTotalMaleEmployeesCount(): number {
  return this.employees.filter(e => e.gender === 'Male').length;
}

getTotalFemaleEmployeesCount(): number {
  return this.employees.filter(e => e.gender === 'Female').length;
}

trackByEmpcode(index: number, employee: any): string {

  return employee.code;
}
}
