import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmcComponent } from './smc.component';

describe('SmcComponent', () => {
  let component: SmcComponent;
  let fixture: ComponentFixture<SmcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmcComponent]
    });
    fixture = TestBed.createComponent(SmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
