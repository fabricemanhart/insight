import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';

import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { JobProfileService } from './../services/job-profile.service';
import { JobProfileFilter } from './job-profile-filter';

@Component({
  selector: 'app-employees-filter',
  templateUrl: './employees-filter.component.html',
  styleUrls: ['./employees-filter.component.scss']
})
export class EmployeesFilterComponent implements OnInit {
  // when declaring rourterParams as ParamMap I get an compiler error
  @Input('routerParams') routerParams: any;
  @Output('queryParamsChange')
  queryParamsChange = new EventEmitter<HttpParams>();
  @Output('routerParamsChange') routerParamsChange = new EventEmitter<any>();

  jobProfileFilter: JobProfileFilter;

  constructor(
    private route: ActivatedRoute,
    private jobProfileService: JobProfileService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.routerParams = params;
      this.jobProfileFilter = new JobProfileFilter(
        this.jobProfileService,
        'jobProfiles',
        'Job Profiles',
        this.routerParams
      );
    });

    Observable.combineLatest(this.jobProfileFilter.subject)
      .debounceTime(500)
      // TODO .distinctUntilChanged()
      .subscribe(filterParams => {
        let httpParams = new HttpParams();
        const routerParams = {};

        filterParams.forEach(function(param) {
          if (param && param[0]) {
            httpParams = httpParams.set(
              param[0].parameterName,
              param.map(s => s.id).toString()
            );

            routerParams[param[0].parameterName] = param
              .map(s => s.id)
              .toString();
          }
        });

        this.queryParamsChange.emit(httpParams);
        this.routerParamsChange.emit(routerParams);
      });
  }
}
