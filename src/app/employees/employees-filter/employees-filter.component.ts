import 'rxjs/add/operator/debounceTime';

import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { FilterParameters } from './../../core/models/filterParameters';

@Component({
  selector: 'app-employees-filter',
  templateUrl: './employees-filter.component.html',
  styleUrls: ['./employees-filter.component.scss']
})
export class EmployeesFilterComponent implements OnInit, OnDestroy {
  // when declaring rourterParams as ParamMap I get an compiler error
  @Input('routerParams') routerParams: any;
  @Output('onFilterChanged')
  onFilterChanged = new EventEmitter<FilterParameters>();
  filterParametersChanged = new Subject<FilterParameters>();
  filterParams: FilterParameters;
  subscription: Subscription;

  jobProfiles$: Observable<Array<JobProfile>>;
  capabilities$: Observable<Array<Capability>>;
  offices$: Observable<Array<Office>>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.filterParams = new FilterParameters(this.routerParams as ParamMap);
    this.subscription = this.filterParametersChanged
      .debounceTime(500)
      // TODO .distinctUntilChanged()
      .subscribe(filterParams => {
        return this.onFilterChanged.emit(filterParams);
      });

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

    this.initialLoadOfEmployeeList();
  }

  initialLoadOfEmployeeList() {
    this.onSearchParemeterChange();
  }

  onSearchParemeterChange() {
    this.filterParametersChanged.next(this.filterParams);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
