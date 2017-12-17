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
    MatGridListModule,
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
import {
    ProjectParticipationTableComponent,
} from './employee/employee-details/project-participation-table/project-participation-table.component';
import {
    ExperienceIndicatorComponent,
} from './employee/employee-details/skill-list/experience-indicator/experience-indicator.component';
import { SkillListComponent } from './employee/employee-details/skill-list/skill-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { FurtherDevelopmentComponent } from './employee/further-development/further-development.component';
import {
    RecommendedTrainingsTableComponent,
} from './employee/further-development/recommended-trainings-table/recommended-trainings-table.component';
import {
    StarRatingComponent,
} from './employee/further-development/recommended-trainings-table/star-rating/star-rating.component';
import { ProjectHistoryComponent } from './employee/project-history/project-history.component';
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
    RouterModule,
    MatGridListModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeesFilterPanelComponent,
    ExperienceIndicatorComponent,
    SkillListComponent,
    ProjectParticipationTableComponent,
    FurtherDevelopmentComponent,
    ProjectHistoryComponent,
    RecommendedTrainingsTableComponent,
    StarRatingComponent
  ],
  providers: []
})
export class EmployeesModule {}
