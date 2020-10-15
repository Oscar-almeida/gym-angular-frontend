import { TestBed } from '@angular/core/testing';

import { HistorialAsistenciaResolveService } from './historial-asistencia-resolve.service';

describe('HistorialAsistenciaResolveService', () => {
  let service: HistorialAsistenciaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialAsistenciaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
