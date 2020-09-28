import { TestBed } from '@angular/core/testing';

import { AprendicesResolveService } from './aprendices-resolve.service';

describe('AprendicesResolveService', () => {
  let service: AprendicesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprendicesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
