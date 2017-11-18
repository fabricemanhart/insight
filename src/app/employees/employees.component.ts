import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Rx';
import { Params } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

  nameSearchParmeter: string;
  jobProfileSearchParameter: string;

  employees: Employee[];
  jobProfiles$: Observable<Array<JobProfile>>;
  capabilities$: Observable<Array<string>>;
  offices$: Observable<Array<string>>;
  searchParametersChanged = new Subject<HttpParams>();
  subscription: Subscription;

  constructor(private httpClient: HttpClient) {
    this.subscription = this.searchParametersChanged
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(params => this.getEmployees(params))
      .subscribe(response => (this.employees = response.slice(0, 10)));
  }

  ngOnInit() {
    this.getEmployees().subscribe(
      response => (this.employees = response.slice(0, 10))
    );

    this.jobProfiles$ = this.httpClient
      .get<Array<JobProfile>>('http://localhost:41588/api/v1/employees/jobprofiles'
      )
      .map(p => p.filter(x => x.Name));

    this.capabilities$ = this.httpClient
      .get<Array<Capability>>('http://localhost:41588/api/v1/capabilities')
      .map(p => p.filter(x => x.Name).map(x => x.Name));

    this.offices$ = this.httpClient
      .get<Array<Office>>('http://localhost:41588/api/v1/offices')
      .map(p => p.filter(x => x.Name).map(x => x.Name));
  }

  onSearchParemeterChange() {
    let params = new HttpParams();
    params = this.nameSearchParmeter ? params.set('name', this.nameSearchParmeter) : params;
    params = this.jobProfileSearchParameter ? params.set('jobProfiles', this.jobProfileSearchParameter) : params;

    this.searchParametersChanged.next(params);
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
