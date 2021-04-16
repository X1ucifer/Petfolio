import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrPaymentdetailsoneComponent } from './usr-paymentdetailsone.component';

describe('UsrPaymentdetailsoneComponent', () => {
  let component: UsrPaymentdetailsoneComponent;
  let fixture: ComponentFixture<UsrPaymentdetailsoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrPaymentdetailsoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrPaymentdetailsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
