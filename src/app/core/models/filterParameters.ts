import { forEach } from '@angular/router/src/utils/collection';
import { HttpParams } from '@angular/common/http';
import { ParamMap } from '@angular/router';

export class FilterParameters {
  private params: HttpParams;

  name: string;
  jobProfiles: Array<number>;
  capabilities: Array<number>;
  offices: Array<number>;

  constructor(params: ParamMap) {
    const keys = params.keys;
    this.name = params.get('name');
    this.jobProfiles = params.getAll('jobProfiles').map(j => +j);
    this.capabilities = params.getAll('assets').map(c => +c);
    this.offices = params.getAll('offices').map(o => +o);
  }

  get HttpParamsForHttpClient() {
    this.params = new HttpParams();
    this.params = this.name ? this.params.set('name', this.name) : this.params;
    this.params = this.jobProfiles.length > 0
      ? this.params.set('jobProfiles', this.jobProfiles.toString())
      : this.params;
    this.params = this.capabilities.length > 0
      ? this.params.set('assets', this.capabilities.toString())
      : this.params;
    this.params = this.offices.length > 0
      ? this.params.set('offices', this.offices.toString())
      : this.params;

    return this.params;
  }

  get QueryParamsForAngularRouter() {
    return {
      name: this.name.length > 0 ? this.name : undefined,
      jobProfiles: this.jobProfiles.length > 0 ? this.jobProfiles : undefined,
      assets: this.capabilities.length > 0 ? this.capabilities : undefined,
      offices: this.offices.length > 0 ? this.offices : undefined
    };
  }
}
