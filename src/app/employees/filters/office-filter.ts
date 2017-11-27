import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/services/data.service';
import { FilterPreload } from './filter-preload';

export class OfficeFilter extends FilterPreload<Office> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      'http://localhost:41588/api/v1/offices',
      'offices',
      'Offices'
    );
  }
}
