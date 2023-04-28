import { TestBed } from '@angular/core/testing';

import { CrudPackagingService } from './crud-packaging.service';

describe('CrudPackagingService', () => {
  let service: CrudPackagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPackagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
