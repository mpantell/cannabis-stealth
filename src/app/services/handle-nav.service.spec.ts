import { TestBed } from '@angular/core/testing';

import { HandleNavService } from './handle-nav.service';

describe('HandleNavService', () => {
  let service: HandleNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
