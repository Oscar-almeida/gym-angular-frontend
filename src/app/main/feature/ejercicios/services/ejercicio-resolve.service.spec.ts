import { TestBed } from '@angular/core/testing';

import { EjercicioResolveService } from './ejercicio-resolve.service';

describe('EjercicioResolveService', () => {
  let service: EjercicioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjercicioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
