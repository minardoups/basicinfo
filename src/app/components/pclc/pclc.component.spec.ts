import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PclcComponent } from './pclc.component';

describe('PclcComponent', () => {
  let component: PclcComponent;
  let fixture: ComponentFixture<PclcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PclcComponent]
    });
    fixture = TestBed.createComponent(PclcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
