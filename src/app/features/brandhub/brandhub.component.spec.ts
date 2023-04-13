import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandhubComponent } from './brandhub.component';

describe('BrandhubComponent', () => {
  let component: BrandhubComponent;
  let fixture: ComponentFixture<BrandhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandhubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
