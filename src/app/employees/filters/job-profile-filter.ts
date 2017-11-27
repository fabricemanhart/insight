import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/services/data.service';
import { FilterPreload } from './filter-preload';

export class JobProfileFilter extends FilterPreload<JobProfile> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      'http://localhost:41588/api/v1/employees/jobprofiles',
      'jobProfiles',
      'Job Profiles'
    );
  }
}
