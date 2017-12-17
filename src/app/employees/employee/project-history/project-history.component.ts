import { ProjectParticipation } from '../../../core/models/project-participation';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private dataService: DataService, route: ActivatedRoute) {
    route.paramMap.subscribe(p => {
      this.code = p.get('code');
      this.url = 'http://localhost:41588/api/v1/employees/' + this.code;

      dataService
        .getAll<Array<ProjectParticipation>>(this.url + '/projects/history')
        .subscribe(res => (this.projects = res));

      return [];
    });
  }
}
