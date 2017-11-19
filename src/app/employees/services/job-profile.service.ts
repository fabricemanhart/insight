import { DataService } from '../../core/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JobProfileService extends DataService {
  constructor(httpClient: HttpClient) {
    super('http://localhost:41588/api/v1/employees/jobprofiles', httpClient);
  }
}
