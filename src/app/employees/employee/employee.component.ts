import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee$: Observable<Employee>;

  url = 'http://localhost:41588/api/v1/employees';

  constructor(private dataService: DataService, route: ActivatedRoute) {
    this.employee$ = route.paramMap.switchMap(p =>
      dataService.getById<Employee>(this.url, p.get('code'))
    );
  }

  ngOnInit() {}
}
