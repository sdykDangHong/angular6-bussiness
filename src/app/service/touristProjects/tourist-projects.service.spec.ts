import { TestBed } from '@angular/core/testing';

import { TouristProjectsService } from './tourist-projects.service';

describe('TouristProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristProjectsService = TestBed.get(TouristProjectsService);
    expect(service).toBeTruthy();
  });
});
