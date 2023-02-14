import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhubComponent } from './adhub.component';

describe('AdhubComponent', () => {
  let component: AdhubComponent;
  let fixture: ComponentFixture<AdhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
