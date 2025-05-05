import { TestBed } from '@angular/core/testing';

import { ApprentisService } from './apprentis.service';

describe('ApprentisService', () => {
  let service: ApprentisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprentisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
