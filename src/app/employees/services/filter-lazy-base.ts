import { FilterBase } from './filter-base';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { Option } from '../../core/models/option';

export class FilterLazyBase<T> extends FilterBase {
  constructor(
    route: ActivatedRoute,
    paramName: string,
    placeholder: string,
    protected service: LazySearch<T>
  ) {
    super(route, paramName, placeholder);

    route.queryParamMap
      .mergeMap(params => {
        this.initialOptions = params.get(this.paramName);

        if (!this.initialOptions) {
          return Observable.of(new Array<Option>());
        }

        // the api can return only one value, therefore we make one request per parameter.
        return Observable.forkJoin(
          this.initialOptions
            .split(',')
            .map(id =>
              this.service
                .searchById<T>(+id)
                .map(p => new Option(p.Id, p.Name, this.paramName))
            )
        );
      })
      .subscribe((o: Array<Option>) => {
        console.log(o);
        this.options = o;
        this.setInitialOptions();
        this.options = []; // for lazy list we don't want to have inital values
      });
  }

  search(term: string) {
    return this.service
      .searchByName<Array<T>>(term)
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)));
  }
}
