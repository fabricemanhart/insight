import { ParamMap } from '@angular/router';
import { Subject } from 'rxjs/Rx';

import { Option } from './../../core/models/option';

export class Filter {
  private params: any;
  private initialOptions: string;
  public options: Array<Option>;
  public selectedOptions: Array<Option> = [];
  public subject = new Subject<Array<Option>>();

  constructor(
    protected paramName: string,
    public placeholder: string,
    params: ParamMap
  ) {
    this.initialOptions = params.get(this.paramName);
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
