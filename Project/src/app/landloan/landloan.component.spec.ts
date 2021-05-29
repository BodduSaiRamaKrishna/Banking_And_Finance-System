import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandloanComponent } from './landloan.component';

describe('LandloanComponent', () => {
  let component: LandloanComponent;
  let fixture: ComponentFixture<LandloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
