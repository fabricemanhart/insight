import { Location } from '@angular/common';
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

  params: HttpParams;
  nameSearchParmeter: string;
  jobProfileSearchParameter: string;
  capabilitySearchParameter: string;
  officeSearchParameter: string;

  employees: Employee[];
  jobProfiles$: Observable<Array<JobProfile>>;
  capabilities$: Observable<Array<Capability>>;
  offices$: Observable<Array<Office>>;
  searchParametersChanged = new Subject<HttpParams>();
  subscription: Subscription;

  constructor(private httpClient: HttpClient, private location: Location) {
    this.subscription = this.searchParametersChanged
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(params => this.getEmployees(params))
      .subscribe(response => {
        this.employees = response.slice(0, 10);
        this.location.replaceState('employees', this.params.toString());
      });
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
      .map(p => p.filter(x => x.Name));

    this.offices$ = this.httpClient
      .get<Array<Office>>('http://localhost:41588/api/v1/offices')
      .map(p => p.filter(x => x.Name));
  }

  onSearchParemeterChange() {
    this.params = new HttpParams();
    this.params = this.nameSearchParmeter ? this.params.set('name', this.nameSearchParmeter) : this.params;
    this.params = this.jobProfileSearchParameter ? this.params.set('jobProfiles', this.jobProfileSearchParameter) : this.params;
    this.params = this.capabilitySearchParameter ? this.params.set('assets', this.capabilitySearchParameter) : this.params;
    this.params = this.officeSearchParameter ? this.params.set('offices', this.officeSearchParameter) : this.params;
    this.searchParametersChanged.next(this.params);
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
