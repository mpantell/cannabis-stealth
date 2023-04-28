import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenKeywordsDictionaryComponent } from './forbidden-keywords-dictionary.component';

describe('ForbiddenKeywordsDictionaryComponent', () => {
  let component: ForbiddenKeywordsDictionaryComponent;
  let fixture: ComponentFixture<ForbiddenKeywordsDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbiddenKeywordsDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddenKeywordsDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
