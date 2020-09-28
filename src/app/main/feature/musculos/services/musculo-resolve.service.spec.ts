import { TestBed } from '@angular/core/testing';

import { MusculoResolveService } from './musculo-resolve.service';

describe('MusculoResolveService', () => {
  let service: MusculoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusculoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
