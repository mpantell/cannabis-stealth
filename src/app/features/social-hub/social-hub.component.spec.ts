import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingHubComponent } from './social-hub.component';

describe('PackagingHubComponent', () => {
  let component: PackagingHubComponent;
  let fixture: ComponentFixture<PackagingHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagingHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagingHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
