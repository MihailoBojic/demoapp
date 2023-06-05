import { TestBed } from '@angular/core/testing';

import { ActivitiesDataService } from './activities-data.service';

describe('ActivitiesDataService', () => {
  let service: ActivitiesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
