import { OfficeService } from './services/office.service';
import { CapabilityService } from './services/capability.service';
import { JobProfileService } from './services/job-profile.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdTabsModule,
} from '@angular/material';

import { CoreModule } from '../core/core.module';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesFilterComponent } from './employees-filter/employees-filter.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from './services/employee.service';

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
    EmployeeDetailsComponent,
    EmployeesFilterComponent
  ],
  providers: [
    EmployeeService,
    JobProfileService,
    CapabilityService,
    OfficeService
  ]
})
export class EmployeesModule {}
