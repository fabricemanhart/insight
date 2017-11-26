import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';

import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CapabilityFilterService } from '../services/capability-filter.service';
import { TrainingFilterService } from '../services/training-filter.service';
import { JobProfileFilterService } from './../services/job-profile-filter.service';
import { OfficeFilterService } from './../services/office-filter.service';
import { SkillFilterService } from './../services/skill-filter.service';

@Component({
  selector: 'app-employees-filter-panel',
  templateUrl: './employees-filter-panel.component.html',
  styleUrls: ['./employees-filter-panel.component.scss']
})
export class EmployeesFilterPanelComponent {
  @Output('queryParamsChange')
  queryParamsChange = new EventEmitter<HttpParams>();
  @Output('routerParamsChange') routerParamsChange = new EventEmitter<any>();

  constructor(
    private jobProfileFilterService: JobProfileFilterService,
    private officeFilterService: OfficeFilterService,
    // private capabilityFilterService: CapabilityFilterService,
    // private skillFilterService: SkillFilterService,
    private trainingFilterService: TrainingFilterService
  ) {
    Observable.combineLatest(
      this.jobProfileFilterService.subject,
      this.officeFilterService.subject,
      // this.capabilityFilterService.subject,
      // this.skillFilterService.subject,
      this.trainingFilterService.subject
    ).subscribe(filterParams => {
      let httpParams = new HttpParams();
      const routerParams = {};

      filterParams.forEach(function(param) {
        console.log("param" + param);
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
