import { TestBed } from '@angular/core/testing';

import { CrudForbiddenKeywordsService } from './crud-forbidden-keywords.service';

describe('CrudForbiddenKeywordsService', () => {
  let service: CrudForbiddenKeywordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudForbiddenKeywordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
