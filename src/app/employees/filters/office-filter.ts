import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/services/data.service';
import { FilterPreload } from './filter-preload';
import { routing } from '../../constants/routing';

export class OfficeFilter extends FilterPreload<Office> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      `${routing.apiHost}api/v1/offices`,
      'offices',
      'Offices'
    );
  }
}
