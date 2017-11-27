import { HttpClient } from '@angular/common/http';
import { DataService } from '../../core/services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService extends DataService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
