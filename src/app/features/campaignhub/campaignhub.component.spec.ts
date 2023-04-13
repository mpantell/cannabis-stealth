import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignhubComponent } from './campaignhub.component';

describe('CampaignhubComponent', () => {
  let component: CampaignhubComponent;
  let fixture: ComponentFixture<CampaignhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignhubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
