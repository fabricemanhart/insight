import { Option } from './../../core/models/option';
import 'rxjs/add/operator/debounceTime';

import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { FilterParameters } from './../../core/models/filter-parameters';
import { CapabilityService } from './../services/capability.service';
import { JobProfileService } from './../services/job-profile.service';
import { OfficeService } from './../services/office.service';

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

  jobProfileOptions: Array<Option>;
  capabilities$: Observable<Array<Capability>>;
  offices$: Observable<Array<Office>>;

  constructor(
    private jobProfileService: JobProfileService,
    private capabilityService: CapabilityService,
    private officeService: OfficeService
  ) {}

  ngOnInit() {
    this.filterParams = new FilterParameters(this.routerParams as ParamMap);
    this.subscription = this.filterParametersChanged
      .debounceTime(500)
      // TODO .distinctUntilChanged()
      .subscribe(filterParams => {
        return this.onFilterChanged.emit(filterParams);
      });

    this.jobProfileService
      .getAll<Array<JobProfile>>()
      .map(p => p.filter(x => x.Name))
      .map(p => p.map(x => new Option(x.Id, x.Name)))
      .subscribe(o => this.jobProfileOptions = o);

    this.capabilities$ = this.capabilityService
      .getAll<Array<Capability>>()
      .map(p => p.filter(x => x.Name));

    this.offices$ = this.officeService
      .getAll<Array<Office>>()
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
