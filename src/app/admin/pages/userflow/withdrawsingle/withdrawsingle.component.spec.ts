import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawsingleComponent } from './withdrawsingle.component';

describe('WithdrawsingleComponent', () => {
  let component: WithdrawsingleComponent;
  let fixture: ComponentFixture<WithdrawsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
