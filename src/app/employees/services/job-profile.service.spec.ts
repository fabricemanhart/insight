import { TestBed, inject } from '@angular/core/testing';

import { JobProfileService } from './job-profile.service';

describe('JobProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobProfileService]
    });
  });

  it('should be created', inject([JobProfileService], (service: JobProfileService) => {
    expect(service).toBeTruthy();
  }));
});
