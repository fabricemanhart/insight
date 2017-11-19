import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Scrollbar from 'smooth-scrollbar';

import { FilterParameters } from './../core/models/filterParameters';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  @ViewChild('sticky') sticky: ElementRef;

  routerParams: ParamMap;
  employees: Employee[];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.routerParams = params;
    });
  }

  getEmployees(params?: HttpParams) {
    console.log('Employee Request: ' + params);
    return this.httpClient.get<
      Array<Employee>>('http://localhost:41588/api/v1/employees', {
      params: params
    });
  }

  onFilterChanged(params: FilterParameters) {
    this.router.navigate(['/employees'], {
      queryParams: params.QueryParamsForAngularRouter
    });
    return this.getEmployees(params.HttpParamsForHttpClient)
    .subscribe(response => (this.employees = response.slice(0, 10))
    );
  }

  ngAfterViewInit() {
    const scrollbar = Scrollbar.get(document.getElementById('main-scrollbar'));
    const marginTop = 60 + 98;
    const scrollHeight = scrollbar.targets.content.clientHeight - marginTop;

    scrollbar.addListener(({ offset }) => {
      const distance = offset.y;

      if (distance >= marginTop) {
        if (distance > scrollHeight) {
          this.sticky.nativeElement.style.top = scrollHeight - marginTop + 'px';
        } else {
          this.sticky.nativeElement.style.top = distance - marginTop + 'px';
        }
      } else {
        this.sticky.nativeElement.style.top = '0px';
      }
    });
  }
}
