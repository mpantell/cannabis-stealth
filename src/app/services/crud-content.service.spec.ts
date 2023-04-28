import { TestBed } from '@angular/core/testing';

import { CrudContentService } from './crud-content.service';

describe('CrudContentService', () => {
  let service: CrudContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
