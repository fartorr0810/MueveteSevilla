import { TestBed } from '@angular/core/testing';

import { AnadirpatineteService } from './anadirpatinete.service';

describe('AnadirpatineteService', () => {
  let service: AnadirpatineteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnadirpatineteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
