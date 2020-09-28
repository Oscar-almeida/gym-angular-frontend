import { TestBed } from '@angular/core/testing';

import { AutenticacionResolveService } from './autenticacion-resolve.service';

describe('AutenticacionResolveService', () => {
  let service: AutenticacionResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
