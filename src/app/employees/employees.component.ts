import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ParamMap, Router } from '@angular/router';

import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  @ViewChild('sticky') sticky: ElementRef;

  routerParams: ParamMap;
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  onRouterParamsChanged(params: any) {
    this.router.navigate(['/employees'], {
      queryParams: params
    });
  }

  onQueryParamsChanged(params: HttpParams) {
    this.employeeService
      .getAll<Array<Employee>>(params)
      .subscribe(response => (this.employees = response));
  }

  // ngAfterViewInit() {
  //   const scrollbar = Scrollbar.get(document.getElementById('main-scrollbar'));
  //   const marginTop = 60 + 98;
  //   const scrollHeight = scrollbar.targets.content.clientHeight - marginTop;

  //   scrollbar.addListener(({ offset }) => {
  //     const distance = offset.y;

  //     if (distance >= marginTop) {
  //       if (distance > scrollHeight) {
  //         this.sticky.nativeElement.style.top = scrollHeight - marginTop + 'px';
  //       } else {
  //         this.sticky.nativeElement.style.top = distance - marginTop + 'px';
  //       }
  //     } else {
  //       this.sticky.nativeElement.style.top = '0px';
  //     }
  //   });
  // }
}
