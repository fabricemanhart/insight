import { HttpParams } from '@angular/common/http';
import { ParamMap } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs/Rx';

import { Option } from './../../core/models/option';
import { JobProfileService } from './../services/job-profile.service';

export class JobProfileFilter {
  private params: HttpParams;
  private initialOptions: string;
  options: Array<Option>;
  selectedOptions: Array<Option> = [];
  subject = new Subject<Array<Option>>();

  constructor(
    private jobProfileService: JobProfileService,
    private paramName: string,
    public placeholder: string,
    params: ParamMap
  ) {
    this.initialOptions = params.get(this.paramName);
    this.jobProfileService
      .getAll<Array<JobProfile>>()
      .map(p => p.filter(x => x.Name && !x.IsGroup))
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)))
      .subscribe(o => {
        this.options = o;
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
