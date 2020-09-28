import { TestBed } from '@angular/core/testing';

import { InventarioResolveService } from './inventario-resolve.service';

describe('InventarioResolveService', () => {
  let service: InventarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
