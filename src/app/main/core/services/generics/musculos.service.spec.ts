import { TestBed } from '@angular/core/testing';

import { MusculosService } from './musculos.service';

describe('MusculosService', () => {
  let service: MusculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
