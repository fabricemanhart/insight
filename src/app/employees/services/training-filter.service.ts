import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Training } from './../../core/models/training';
import { FilterLazyBase } from './filter-lazy-base';
import { TrainingService } from './training.service';

@Injectable()
export class TrainingFilterService extends FilterLazyBase<Training> {
  constructor(private trainingService: TrainingService, route: ActivatedRoute) {
    super(route, 'trainings', 'Trainings', trainingService);
  }
}
