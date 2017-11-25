import { Option } from './../../core/models/option';
import { JobProfileService } from './../services/job-profile.service';
import { Filter } from './filter';

export class JobProfileFilter extends Filter {

  constructor(
    private jobProfileService: JobProfileService,
    paramName: string,
    placeholder: string,
    params: any,
  ) {
    super(paramName, placeholder, params);
    this.jobProfileService
      .getAll<Array<JobProfile>>()
      .map(p => p.filter(x => x.Name && !x.IsGroup))
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)))
      .subscribe(o => {
        this.options = o;
        this.setInitalOptions();
      });
  }
}
