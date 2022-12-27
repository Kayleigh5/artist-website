import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EpkComponent } from './epk.component';

describe('EpkComponent', () => {
  let component: EpkComponent;
  let fixture: ComponentFixture<EpkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EpkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
