import { TestBed } from '@angular/core/testing';

import { RutinasResolveService } from './rutinas-resolve.service';

describe('RutinasResolveService', () => {
  let service: RutinasResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinasResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
