import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicleloanComponent } from './vechicleloan.component';

describe('VechicleloanComponent', () => {
  let component: VechicleloanComponent;
  let fixture: ComponentFixture<VechicleloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechicleloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechicleloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
