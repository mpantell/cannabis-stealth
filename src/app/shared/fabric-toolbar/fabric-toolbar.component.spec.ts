import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricToolbarComponent } from './fabric-toolbar.component';

describe('FabricToolbarComponent', () => {
  let component: FabricToolbarComponent;
  let fixture: ComponentFixture<FabricToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
