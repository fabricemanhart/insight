import { switchMap } from 'rxjs/operators';
import { FilterParameters } from './../core/models/filterParameters';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sticky') sticky: ElementRef;

  filterParams = new FilterParameters();

  employees: Employee[];
  jobProfiles$: Observable<Array<JobProfile>>;
  capabilities$: Observable<Array<Capability>>;
  offices$: Observable<Array<Office>>;
  searchParametersChanged = new Subject<FilterParameters>();
  subscription: Subscription;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('On Init');

    this.route.queryParamMap
      .switchMap(params => {
        this.filterParams.SetFilterParams(params);
        console.log('q');
        return this.getEmployees(this.filterParams.HttpParams);
      })
      .subscribe(response => (this.employees = response.slice(0, 10)));

    this.subscription = this.searchParametersChanged
      .debounceTime(500)
      // TODO .distinctUntilChanged()
      .switchMap(params => {
        this.router.navigate(['/employees'], {
          queryParams: params.QueryParams
        });
        return this.getEmployees(params.HttpParams);
      })
      .subscribe(response => this.employees = response.slice(0, 10));

    this.jobProfiles$ = this.httpClient
      .get<Array<JobProfile>>(
        'http://localhost:41588/api/v1/employees/jobprofiles'
      )
      .map(p => p.filter(x => x.Name));

    this.capabilities$ = this.httpClient
      .get<Array<Capability>>('http://localhost:41588/api/v1/capabilities')
      .map(p => p.filter(x => x.Name));

    this.offices$ = this.httpClient
      .get<Array<Office>>('http://localhost:41588/api/v1/offices')
      .map(p => p.filter(x => x.Name));
  }

  onSearchParemeterChange() {
    this.searchParametersChanged.next(this.filterParams);
  }

  getEmployees(params?: HttpParams) {
    return this.httpClient.get<
      Array<Employee>
    >('http://localhost:41588/api/v1/employees', {
      params: params
    });
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
