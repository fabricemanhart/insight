import { OfficeService } from './office.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Option } from '../../core/models/option';
import { FilterBase } from './filter-base';

@Injectable()
export class OfficeFilterService extends FilterBase {
  constructor(private officeService: OfficeService, route: ActivatedRoute) {
    super(route, 'offices', 'Offices');

    this.httpResponse$ = this.officeService
      .getAll<Array<Office>>()
      .map(p => p.filter(x => x.Name && !x.IsGroup))
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)));

    this.initZipObservable();
  }
}
