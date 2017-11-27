
import { TestBed, inject } from '@angular/core/testing';

import { JobProfileFilter } from './job-profile-filter';

describe('JobProfileFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobProfileFilter]
    });
  });

  it('should be created', inject([JobProfileFilter], (service: JobProfileFilter) => {
    expect(service).toBeTruthy();
  }));
});
