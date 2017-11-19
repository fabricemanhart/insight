import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private url: string, private httpClient: HttpClient) { }

  getAll<T>(params?: HttpParams) {
    return this.httpClient.get<T>(this.url, {
      params: params
    });
  }
}
