import { TestBed, inject } from '@angular/core/testing';

import { SkillFilter } from './skill-filter';

describe('SkillFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillFilter]
    });
  });

  it('should be created', inject([SkillFilter], (service: SkillFilter) => {
    expect(service).toBeTruthy();
  }));
});
