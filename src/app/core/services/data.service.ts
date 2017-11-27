import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(protected httpClient: HttpClient) {}

  getAll<T>(url: string, params?: HttpParams) {
    return this.httpClient.get<T>(url, {
      params: params
    });
  }

  searchByName<T>(url: string, term: string) {
    return this.httpClient.get<T>(url + term, {});
  }

  searchById<T>(url: string, id: number) {
    return this.httpClient.get<T>(url + '/' + id, {});
  }
}
