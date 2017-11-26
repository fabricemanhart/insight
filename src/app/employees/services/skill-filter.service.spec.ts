import { TestBed, inject } from '@angular/core/testing';

import { SkillFilterService } from './skill-filter.service';

describe('SkillFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillFilterService]
    });
  });

  it('should be created', inject([SkillFilterService], (service: SkillFilterService) => {
    expect(service).toBeTruthy();
  }));
});
