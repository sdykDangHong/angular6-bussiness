import { TestBed } from '@angular/core/testing';

import { DemandsAddService } from './demands-add.service';

describe('DemandsAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandsAddService = TestBed.get(DemandsAddService);
    expect(service).toBeTruthy();
  });
});
