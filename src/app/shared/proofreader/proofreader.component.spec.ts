import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofreaderComponent } from './proofreader.component';

describe('ProofreaderComponent', () => {
  let component: ProofreaderComponent;
  let fixture: ComponentFixture<ProofreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofreaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
