import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';

import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CapabilityFilter } from '../filters/capability-filter';
import { JobProfileFilter } from '../filters/job-profile-filter';
import { OfficeFilter } from '../filters/office-filter';
import { SkillFilter } from '../filters/skill-filter';
import { TrainingFilter } from '../filters/training-filter';
import { DataService } from './../../core/services/data.service';

@Component({
  selector: 'app-employees-filter-panel',
  templateUrl: './employees-filter-panel.component.html',
  styleUrls: ['./employees-filter-panel.component.scss']
})
export class EmployeesFilterPanelComponent {
  @Output('queryParamsChange')
  queryParamsChange = new EventEmitter<HttpParams>();
  @Output('routerParamsChange') routerParamsChange = new EventEmitter<any>();

  private jobProfileFilter: JobProfileFilter;
  private officeFilter: OfficeFilter;
  private capabilityFilter: CapabilityFilter;
  private skillFilter: SkillFilter;
  private trainingFilter: TrainingFilter;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.jobProfileFilter = new JobProfileFilter(dataService, route);
    this.officeFilter = new OfficeFilter(dataService, route);
    this.capabilityFilter = new CapabilityFilter(dataService, route);
    this.skillFilter = new SkillFilter(dataService, route);
    this.trainingFilter = new TrainingFilter(dataService, route);

    Observable.combineLatest(
      this.jobProfileFilter.subject,
      this.officeFilter.subject,
      this.capabilityFilter.subject,
      this.skillFilter.subject,
      this.trainingFilter.subject
    ).subscribe(filterParams => {
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
