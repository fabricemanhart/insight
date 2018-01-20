import { ActivatedRoute } from '@angular/router';

import { routing } from '../../constants/routing';
import { DataService } from '../../core/services/data.service';
import { Training } from '../../shared/models/training';
import { FilterLazy } from './filter-lazy';

export class TrainingFilter extends FilterLazy<Training> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      `${routing.apiHost}api/v1/trainings/search?term=`,
      `${routing.apiHost}api/v1/trainings/`,
      'trainings',
      'Trainings'
    );
  }
}
