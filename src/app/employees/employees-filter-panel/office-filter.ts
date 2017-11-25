import { Option } from './../../core/models/option';
import { OfficeService } from './../services/office.service';
import { Filter } from './filter';

export class OfficeFilter extends Filter {
  constructor(
    private officeService: OfficeService,
    paramName: string,
    placeholder: string,
    params: any
  ) {
    super(paramName, placeholder, params);
    this.officeService
      .getAll<Array<Office>>()
      .map(p => p.filter(x => x.Name && !x.IsGroup))
      .map(p => p.map(x => new Option(x.Id, x.Name, this.paramName)))
      .subscribe(o => {
        this.options = o;
        this.setInitalOptions();
      });
  }
}
