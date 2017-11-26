import { OfficeFilterService } from './../services/office-filter.service';
import { JobProfileFilterService } from './../services/job-profile-filter.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';

import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OfficeService } from '../services/office.service';
import { JobProfileService } from './../services/job-profile.service';

@Component({
  selector: 'app-employees-filter-panel',
  templateUrl: './employees-filter-panel.component.html',
  styleUrls: ['./employees-filter-panel.component.scss']
})
export class EmployeesFilterPanelComponent implements OnInit {
  @Output('queryParamsChange')
  queryParamsChange = new EventEmitter<HttpParams>();
  @Output('routerParamsChange') routerParamsChange = new EventEmitter<any>();

  constructor(
    public jobProfileFilterService: JobProfileFilterService,
    public officeFilterService: OfficeFilterService
  ) {}

  ngOnInit() {

    Observable.combineLatest(
      this.jobProfileFilterService.subject,
      this.officeFilterService.subject
    )
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
