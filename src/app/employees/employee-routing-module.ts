import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees.component';

const employeesRoutes: Routes = [
    { path: 'employees/:code', component: EmployeeComponent },
    { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(employeesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
