import { TestBed } from '@angular/core/testing';

import { DemanderProjectsService } from './demander-projects.service';

describe('DemanderProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemanderProjectsService = TestBed.get(DemanderProjectsService);
    expect(service).toBeTruthy();
  });
});
