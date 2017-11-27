import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Option } from '../../core/models/option';
import { DataService } from '../../core/services/data.service';
import { FilterBase } from './filter-base';

export class FilterPreload<T> extends FilterBase {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private url: string,
    protected paramName: string,
    public placeholder: string
  ) {
    super(paramName, placeholder);

    const httpResponse$ = this.dataService
      .getAll<Array<JobProfile>>(this.url)
      .map(p => p.filter(x => x.Name && !x.IsGroup))
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)));

    Observable.zip(
      this.route.queryParamMap,
      httpResponse$,
      (params: any, response: Option[]) => ({ params, response })
    ).subscribe(result => {
      this.initialOptions = result.params.get(this.paramName);
      this.options = result.response;
      this.setInitialOptions();
    });
  }
}
