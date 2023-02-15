import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenthubComponent } from './contenthub.component';

describe('ContenthubComponent', () => {
  let component: ContenthubComponent;
  let fixture: ComponentFixture<ContenthubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenthubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenthubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
