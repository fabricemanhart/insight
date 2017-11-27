import { TestBed, inject } from '@angular/core/testing';

import { CapabilityFilter } from './capability-filter';

describe('CapabilityFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapabilityFilter]
    });
  });

  it('should be created', inject([CapabilityFilter], (service: CapabilityFilter) => {
    expect(service).toBeTruthy();
  }));
});
