import { TestBed, inject } from '@angular/core/testing';

import { TrainingFilter } from './training-filter';

describe('TrainingFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingFilter]
    });
  });

  it('should be created', inject([TrainingFilter], (service: TrainingFilter) => {
    expect(service).toBeTruthy();
  }));
});
