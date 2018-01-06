import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { EmployeesRoutingModule } from './employee-routing-module';
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
    SharedModule,
    EmployeesRoutingModule
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
  ]
})
export class EmployeesModule {}
