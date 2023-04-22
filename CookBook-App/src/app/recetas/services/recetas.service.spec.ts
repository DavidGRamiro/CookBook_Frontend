import { TestBed } from '@angular/core/testing';

import { RecetasService } from './recetas-service.service'

describe('RecetasServiceService', () => {
  let service: RecetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
