import { ActivatedRoute } from '@angular/router';

import { routing } from '../../constants/routing';
import { DataService } from '../../core/services/data.service';
import { FilterPreload } from './filter-preload';

export class JobProfileFilter extends FilterPreload<JobProfile> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      `${routing.apiHost}api/v1/employees/jobprofiles`,
      'jobProfiles',
      'Job Profiles'
    );
  }
}
