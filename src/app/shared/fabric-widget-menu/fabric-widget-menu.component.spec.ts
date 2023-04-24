import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricWidgetMenuComponent } from './fabric-widget-menu.component';

describe('FabricWidgetMenuComponent', () => {
  let component: FabricWidgetMenuComponent;
  let fixture: ComponentFixture<FabricWidgetMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricWidgetMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricWidgetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
