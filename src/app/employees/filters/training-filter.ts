import { ActivatedRoute } from '@angular/router';

import { Training } from '../../core/models/training';
import { DataService } from '../../core/services/data.service';
import { FilterLazy } from './filter-lazy';

export class TrainingFilter extends FilterLazy<Training> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      'http://localhost:41588/api/v1/trainings/search?term=',
      'http://localhost:41588/api/v1/trainings/',
      'trainings',
      'Trainings'
    );
  }
}
