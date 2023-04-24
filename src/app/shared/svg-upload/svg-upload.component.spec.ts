import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUploadComponent } from './svg-upload.component';

describe('SvgUploadComponent', () => {
  let component: SvgUploadComponent;
  let fixture: ComponentFixture<SvgUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
