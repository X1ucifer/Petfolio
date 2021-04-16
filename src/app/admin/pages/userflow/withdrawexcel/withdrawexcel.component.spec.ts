import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawexcelComponent } from './withdrawexcel.component';

describe('WithdrawexcelComponent', () => {
  let component: WithdrawexcelComponent;
  let fixture: ComponentFixture<WithdrawexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
