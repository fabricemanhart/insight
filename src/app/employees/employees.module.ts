import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { MdButtonModule, MdChipsModule, MdIconModule, MdTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdButtonModule,
    MdChipsModule,
    MdIconModule,
    MdTabsModule
  ],
  declarations: [EmployeeComponent, EmployeeDetailsComponent]
})
export class EmployeesModule { }
