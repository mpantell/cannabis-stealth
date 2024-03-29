import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricCanvasComponent } from './fabric-canvas.component';

describe('FabricCanvasComponent', () => {
  let component: FabricCanvasComponent;
  let fixture: ComponentFixture<FabricCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
