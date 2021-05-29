import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureloanComponent } from './agricultureloan.component';

describe('AgricultureloanComponent', () => {
  let component: AgricultureloanComponent;
  let fixture: ComponentFixture<AgricultureloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgricultureloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultureloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
