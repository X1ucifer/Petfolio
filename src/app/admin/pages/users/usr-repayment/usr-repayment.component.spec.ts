import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrRepaymentComponent } from './usr-repayment.component';

describe('UsrRepaymentComponent', () => {
  let component: UsrRepaymentComponent;
  let fixture: ComponentFixture<UsrRepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrRepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrRepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
