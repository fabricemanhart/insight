import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { routing } from '../../constants/routing';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employee$: Observable<EmployeeDetail>;

  url = `${routing.apiHost}api/v1/employees/`;

  constructor(private dataService: DataService, route: ActivatedRoute) {
    this.employee$ = route.paramMap.switchMap(p =>
      dataService.getById<EmployeeDetail>(this.url, p.get('code'))
    );
  }

  getEmployeeImageUrl(code: string) {
    return `${routing.apiHost}api/v1/employees/${code}/picture?large=true`;
  }
}
