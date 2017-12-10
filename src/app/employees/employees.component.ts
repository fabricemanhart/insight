import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ParamMap, Router } from '@angular/router';

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent  {
  displayedColumns = ['Avatar', 'FullName', 'Code', 'Title', 'OrganisationUnit', 'Location', 'PrivateAddress', 'Availability'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild('sticky') sticky: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  url = 'http://localhost:41588/api/v1/employees';
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
      .subscribe(response => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
