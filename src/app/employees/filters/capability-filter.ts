import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/services/data.service';
import { FilterPreload } from './filter-preload';

export class CapabilityFilter extends FilterPreload<Capability> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      'http://localhost:41588/api/v1/capabilities',
      'assets',
      'Capabilities'
    );
  }
}
