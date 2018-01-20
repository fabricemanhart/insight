import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routing } from '../../../constants/routing';
import { DataService } from '../../../core/services/data.service';
import { EmployeeRole } from '../../../shared/models/employee-role';
import { EmployeeSkill } from '../../../shared/models/employee-skill';
import { ShortProfile } from '../../../shared/models/shortProfile';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  url: string;
  code: string;
  shortProfiles: Array<ShortProfile>;
  allSkills: Array<EmployeeSkill>;
  employeeRoles: Array<EmployeeRole>;

  constructor(private dataService: DataService, route: ActivatedRoute) {
    route.paramMap.subscribe(p => {
      this.code = p.get('code');
      this.url = `${routing.apiHost}api/v1/employees/${this.code}`;

      dataService
        .getAll<Array<ShortProfile>>(this.url + '/shortprofiles')
        .subscribe(res => (this.shortProfiles = res));

      dataService
        .getAll<Array<EmployeeSkill>>(this.url + '/skills')
        .subscribe(res => (this.allSkills = res));

      dataService
        .getAll<Array<EmployeeRole>>(this.url + '/roles')
        .subscribe(res => this.employeeRoles = res);

      return [];
    });
  }

  getProjectChartImageUrl() {
    return `${routing.apiHost}api/v1/employees/${this.code}/utilization?width=1000&weeks=32&offset=0`;
  }
}
