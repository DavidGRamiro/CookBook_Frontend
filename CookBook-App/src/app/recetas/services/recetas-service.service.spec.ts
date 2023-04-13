import { TestBed } from '@angular/core/testing';

import { RecetasServiceService } from './recetas-service.service';

describe('RecetasServiceService', () => {
  let service: RecetasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
