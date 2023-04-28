import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenKeywordFormComponent } from './forbidden-keyword-form.component';

describe('ForbiddenKeywordFormComponent', () => {
  let component: ForbiddenKeywordFormComponent;
  let fixture: ComponentFixture<ForbiddenKeywordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbiddenKeywordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddenKeywordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
