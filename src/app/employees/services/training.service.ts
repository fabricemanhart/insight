import { Training } from '../../core/models/training';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../core/services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainingService extends DataService implements LazySearch<Training> {
  constructor(httpClient: HttpClient) {
    super('http://localhost:41588/api/v1/trainings', httpClient);
  }

  searchByName<T>(term: string) {
    return this.httpClient.get<T>(this.url + '/search?term=' + term, {});
  }

  searchById<T>(id: number) {
    return this.httpClient.get<T>(this.url + '/' + id, {});
  }
}
