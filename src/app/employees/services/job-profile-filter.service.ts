import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Option } from '../../core/models/option';
import { FilterBase } from './filter-base';
import { JobProfileService } from './job-profile.service';

@Injectable()
export class JobProfileFilterService extends FilterBase {
  constructor(
    private jobProfileService: JobProfileService,
    route: ActivatedRoute
  ) {
    super(route, 'jobProfiles', 'Job Profiles');

    this.httpResponse$ = this.jobProfileService
      .getAll<Array<JobProfile>>()
      .map(p => p.filter(x => x.Name && !x.IsGroup))
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)));

    this.initZipObservable();
  }
}
