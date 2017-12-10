import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { EmployeeSkill } from '../../../core/models/employee-skill';
import { ShortProfile } from '../../../core/models/shortProfile';
import { DataService } from '../../../core/services/data.service';

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

  constructor(private dataService: DataService, route: ActivatedRoute) {
    route.paramMap.subscribe(p => {
      this.code = p.get('code');
      this.url = 'http://localhost:41588/api/v1/employees/' + this.code;

      dataService
        .getAll<Array<ShortProfile>>(this.url + '/shortprofiles')
        .subscribe(res => (this.shortProfiles = res));

      dataService
        .getAll<Array<EmployeeSkill>>(this.url + '/skills')
        .subscribe(res => (this.allSkills = res));

      return [];
    });
  }
}
