import { ReplaySubject } from 'rxjs/Rx';

import { Option } from '../../core/models/option';

export class FilterBase {
  protected initialOptions: string;
  public options: Array<Option>;
  public selectedOptions: Array<Option> = [];
  public subject = new ReplaySubject <Array<Option>>();

  constructor(
    protected paramName: string,
    public placeholder: string
  ) {}

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
