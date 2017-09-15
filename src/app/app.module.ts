import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { OthersComponent } from './others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeslistComponent,
    EmployeeCountComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
