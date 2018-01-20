import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ParamMap, Router } from '@angular/router';

import { routing } from '../constants/routing';
import { DataService } from '../core/services/data.service';
import { EmployeeRow } from '../shared/models/employee-row';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  displayedColumns = [
    'avatar',
    'fullName',
    'code',
    'title',
    'organisationUnit',
    'location',
    'privateAddress',
    'availability'
  ];
  dataSource: MatTableDataSource<EmployeeRow>;

  @ViewChild('sticky') sticky: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  url = `${routing.apiHost}api/v1/employees`;
  routerParams: ParamMap;

  constructor(
    private dataService: DataService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  onRouterParamsChanged(params: any) {
    this.router.navigate(['/employees'], {
      queryParams: params
    });
  }

  onQueryParamsChanged(params: HttpParams) {
    this.dataService
      .getAll<Array<Employee>>(this.url, params)
      .subscribe(res => {
        const employeeRows = res.map(r => new EmployeeRow(r));
        this.dataSource = new MatTableDataSource(employeeRows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getEmployeeSmallImageUrl(code: string) {
    return `${routing.apiHost}img/Employees/${code}.jpg`;
  }

  getUtilizationImageUrl(code: string) {
    return `${routing.apiHost}api/v1/employees/${code}/utilization/line`;
  }

  setDefaultEmployeeImage(event) {
    event.target.src = `${routing.apiHost}img/user.jpg`;
  }
}
