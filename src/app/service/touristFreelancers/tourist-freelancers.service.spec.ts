import { TestBed } from '@angular/core/testing';

import { TouristFreelancersService } from './tourist-freelancers.service';

describe('TouristFreelancersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristFreelancersService = TestBed.get(TouristFreelancersService);
    expect(service).toBeTruthy();
  });
});
