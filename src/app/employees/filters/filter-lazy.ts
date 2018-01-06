import { DataService } from '../../core/services/data.service';
import { FilterBase } from './filter-base';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { Option } from '../../shared/models/option';

export class FilterLazy<T extends {Id: number, Name: string }> extends FilterBase {
  constructor(
    private dataService: DataService,
    route: ActivatedRoute,
    private searchByTermUrl: string,
    private getByIdUrl: string,
    paramName: string,
    placeholder: string,
  ) {
    super(paramName, placeholder);

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
              this.dataService
                .getById<T>(getByIdUrl, +id)
                .map(p => new Option(p.Id, p.Name, this.paramName))
            )
        );
      })
      .subscribe((o: Array<Option>) => {
        this.options = o;
        this.setInitialOptions();
        this.options = []; // for lazy list we don't want to have inital values
      });
  }

  search(term: string) {
    return this.dataService
      .searchByName<Array<T>>(this.searchByTermUrl, term)
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)));
  }
}
