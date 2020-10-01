import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderC } from './slider.component';

describe('SliderC', () => {
  let component: SliderC;
  let fixture: ComponentFixture<SliderC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderC ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
