import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { ProjectTableComponent } from './employee/employee-details/project-table/project-table.component';
import {
    ExperienceIndicatorComponent,
} from './employee/employee-details/skill-list/experience-indicator/experience-indicator.component';
import { SkillListComponent } from './employee/employee-details/skill-list/skill-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesFilterPanelComponent } from './employees-filter-panel/employees-filter-panel.component';
import { EmployeesComponent } from './employees.component';

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
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeesFilterPanelComponent,
    ExperienceIndicatorComponent,
    SkillListComponent,
    ProjectTableComponent
  ],
  providers: []
})
export class EmployeesModule {}
