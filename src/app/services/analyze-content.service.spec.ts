import { TestBed } from '@angular/core/testing';

import { AnalyzeContentService } from './analyze-content.service';

describe('AnalyzeContentService', () => {
  let service: AnalyzeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyzeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
