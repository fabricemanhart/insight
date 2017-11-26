import { TestBed, inject } from '@angular/core/testing';

import { TrainingFilterService } from './training-filter.service';

describe('TrainingFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingFilterService]
    });
  });

  it('should be created', inject([TrainingFilterService], (service: TrainingFilterService) => {
    expect(service).toBeTruthy();
  }));
});
