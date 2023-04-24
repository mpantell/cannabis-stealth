import { TestBed } from '@angular/core/testing';

import { ListViewBuilderService } from './list-view-builder.service';

describe('ListViewBuilderService', () => {
  let service: ListViewBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListViewBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
