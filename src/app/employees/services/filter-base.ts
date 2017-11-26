import { ActivatedRoute } from '@angular/router';
import { ReplaySubject , Observable } from 'rxjs/Rx';

import { Option } from '../../core/models/option';

export class FilterBase {
  protected initialOptions: string;
  protected httpResponse$: Observable<Option[]>;
  public options: Array<Option>;
  public selectedOptions: Array<Option> = [];
  public subject = new ReplaySubject <Array<Option>>();

  constructor(
    private route: ActivatedRoute,
    protected paramName: string,
    public placeholder: string
  ) {}

  initZipObservable() {
    Observable.zip(
      this.route.queryParamMap,
      this.httpResponse$,
      (params: any, response: Option[]) => ({ params, response })
    ).subscribe(result => {
      this.initialOptions = result.params.get(this.paramName);
      this.options = result.response;
      this.setInitialOptions();
    });
  }

  setInitialOptions() {
    if (this.initialOptions) {
      this.selectedOptions = this.initialOptions.split(',').map(p => {
        const option = this.options.filter(x => x.id === +p)[0];
        return new Option(
          +p,
          option ? option.name : null,
          this.paramName
        );
      }).filter(o => o.name);
    }

    this.next();
  }

  next() {
    this.subject.next(this.selectedOptions);
  }
}
