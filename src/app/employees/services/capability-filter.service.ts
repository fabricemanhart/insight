import { CapabilityService } from './capability.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Option } from '../../core/models/option';
import { FilterBase } from './filter-base';

@Injectable()
export class CapabilityFilterService extends FilterBase {
  constructor(private capabilityService: CapabilityService, route: ActivatedRoute) {
    super(route, 'assets', 'Capabilities');

    this.httpResponse$ = this.capabilityService
      .getAll<Array<Capability>>()
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)));

    this.initZipObservable();
  }
}
