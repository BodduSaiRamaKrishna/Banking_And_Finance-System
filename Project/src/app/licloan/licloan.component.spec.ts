import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicloanComponent } from './licloan.component';

describe('LicloanComponent', () => {
  let component: LicloanComponent;
  let fixture: ComponentFixture<LicloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
