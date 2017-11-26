import { TestBed, inject } from '@angular/core/testing';

import { CapabilityFilterService } from './capability-filter.service';

describe('CapabilityFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapabilityFilterService]
    });
  });

  it('should be created', inject([CapabilityFilterService], (service: CapabilityFilterService) => {
    expect(service).toBeTruthy();
  }));
});
