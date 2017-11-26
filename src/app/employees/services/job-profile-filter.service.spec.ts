import { TestBed, inject } from '@angular/core/testing';

import { JobProfileFilterService } from './job-profile-filter.service';

describe('JobProfileFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobProfileFilterService]
    });
  });

  it('should be created', inject([JobProfileFilterService], (service: JobProfileFilterService) => {
    expect(service).toBeTruthy();
  }));
});
