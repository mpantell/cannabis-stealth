import { TestBed } from '@angular/core/testing';

import { Gpt4AnalyzeContentService } from './gpt-4-analyze-content.service';

describe('Gpt4AnalyzeContentService', () => {
  let service: Gpt4AnalyzeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gpt4AnalyzeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
