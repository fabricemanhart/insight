import { TestBed, inject } from '@angular/core/testing';

import { OfficeFilterService } from './office-filter.service';

describe('OfficeFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficeFilterService]
    });
  });

  it('should be created', inject([OfficeFilterService], (service: OfficeFilterService) => {
    expect(service).toBeTruthy();
  }));
});
