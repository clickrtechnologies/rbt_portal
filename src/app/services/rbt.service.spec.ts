import { TestBed } from '@angular/core/testing';

import { RbtService } from './rbt.service';

describe('RbtService', () => {
  let service: RbtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RbtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
