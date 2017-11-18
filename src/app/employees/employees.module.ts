import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms/src/directives';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import {
  MdButtonModule,
  MdChipsModule,
  MdInputModule,
  MdIconModule,
  MdTabsModule,
  MdCheckboxModule,
  MdCardModule,
  MdSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeesComponent } from './employees.component';
import { PageHeaderComponent } from '../core/page-header/page-header.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdChipsModule,
    MdIconModule,
    MdTabsModule,
    MdCheckboxModule,
    MdCardModule,
    MdSelectModule,
    MdInputModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeComponent,
    EmployeeDetailsComponent
  ]
})
export class EmployeesModule {}
