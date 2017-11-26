import { Skill } from '../../core/models/skill';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../core/services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillService extends DataService implements LazySearch<Skill> {
  constructor(httpClient: HttpClient) {
    super('http://localhost:41588/api/v1/skills', httpClient);
  }

  searchByName<T>(term: string) {
    return this.httpClient.get<T>(this.url + '/search/' + term, {});
  }

  searchById<T>(id: number) {
    return this.httpClient.get<T>(this.url + '/' + id, {});
  }
}
