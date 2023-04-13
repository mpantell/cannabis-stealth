import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionHorizontalComponent } from './accordion-horizontal.component';

describe('AccordionHorizontalComponent', () => {
  let component: AccordionHorizontalComponent;
  let fixture: ComponentFixture<AccordionHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
