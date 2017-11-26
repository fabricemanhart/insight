import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { Option } from '../../core/models/option';

export class FilterBase {
  protected initialOptions: string;
  protected httpResponse$: Observable<Option[]>;
  public options: Array<Option>;
  public selectedOptions: Array<Option> = [];
  public subject = new Subject<Array<Option>>();

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
      this.setInitalOptions();
    });
  }

  setInitalOptions() {
    if (this.initialOptions) {
      this.selectedOptions = this.initialOptions
        .split(',')
        .map(
          p =>
            new Option(
              +p,
              this.options.filter(x => x.id === +p)[0].name,
              this.paramName
            )
        );
    }

    this.next();
  }

  next() {
    this.subject.next(this.selectedOptions);
  }
}
