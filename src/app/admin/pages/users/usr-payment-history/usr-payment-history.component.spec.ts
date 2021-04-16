import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrPaymentHistoryComponent } from './usr-payment-history.component';

describe('UsrPaymentHistoryComponent', () => {
  let component: UsrPaymentHistoryComponent;
  let fixture: ComponentFixture<UsrPaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrPaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
