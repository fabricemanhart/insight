import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routing } from '../../../constants/routing';
import { ProjectParticipation } from '../../../shared/models/project-participation';
import { DataService } from './../../../core/services/data.service';

@Component({
  selector: 'app-project-history',
  templateUrl: './project-history.component.html',
  styleUrls: ['./project-history.component.scss']
})
export class ProjectHistoryComponent {
  url: string;
  code: string;
  projects: Array<ProjectParticipation>;
  @Input('employeeDetail') employeeDetail: EmployeeDetail;

  constructor(private dataService: DataService, route: ActivatedRoute) {
    route.paramMap.subscribe(p => {
      this.code = p.get('code');
      this.url = `${routing.apiHost}api/v1/employees/${this.code}`;

      dataService
        .getAll<Array<ProjectParticipation>>(this.url + '/projects/history')
        .subscribe(
          res => (this.projects = res.sort(this.compareByFromEffective))
        );

      return [];
    });
  }

  private compareByFromEffective(
    a: ProjectParticipation,
    b: ProjectParticipation
  ) {
    if (a.FromEffective > b.FromEffective) {
      return -1;
    }
    if (a.FromEffective < b.FromEffective) {
      return 1;
    }
    return 0;
  }

  getProjectChartImageUrl(code: string) {
    return `${routing.apiHost}api/v1/projects/${code}/picture`;
  }
}
