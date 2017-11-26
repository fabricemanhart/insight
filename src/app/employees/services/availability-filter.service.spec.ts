import { TestBed, inject } from '@angular/core/testing';

import { AvailabilityFilterService } from './availability-filter.service';

describe('AvailabilityFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailabilityFilterService]
    });
  });

  it('should be created', inject([AvailabilityFilterService], (service: AvailabilityFilterService) => {
    expect(service).toBeTruthy();
  }));
});
