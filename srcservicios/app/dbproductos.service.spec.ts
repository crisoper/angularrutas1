import { TestBed } from '@angular/core/testing';

import { DbproductosService } from './dbproductos.service';

describe('DbproductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbproductosService = TestBed.get(DbproductosService);
    expect(service).toBeTruthy();
  });
});
