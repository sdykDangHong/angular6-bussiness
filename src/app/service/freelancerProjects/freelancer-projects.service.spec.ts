import { TestBed } from '@angular/core/testing';

import { FreelancerProjectsService } from './freelancer-projects.service';

describe('FreelancerProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreelancerProjectsService = TestBed.get(FreelancerProjectsService);
    expect(service).toBeTruthy();
  });
});
