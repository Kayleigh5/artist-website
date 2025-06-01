import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarpComponent } from './harp.component';

describe('HarpComponent', () => {
  let component: HarpComponent;
  let fixture: ComponentFixture<HarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
