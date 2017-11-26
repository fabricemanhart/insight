import { EmployeesFilterPanelComponent } from './employees-filter-panel/employees-filter-panel.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
} from '@angular/material';

import { CoreModule } from '../core/core.module';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees.component';
import { CapabilityService } from './services/capability.service';
import { EmployeeService } from './services/employee.service';
import { JobProfileFilterService } from './services/job-profile-filter.service';
import { JobProfileService } from './services/job-profile.service';
import { OfficeFilterService } from './services/office-filter.service';
import { OfficeService } from './services/office.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeesFilterPanelComponent
  ],
  providers: [
    EmployeeService,
    JobProfileService,
    CapabilityService,
    OfficeService,
    JobProfileFilterService,
    OfficeFilterService
  ]
})
export class EmployeesModule {}
