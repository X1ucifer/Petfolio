import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrPaymentdetailsComponent } from './usr-paymentdetails.component';

describe('UsrPaymentdetailsComponent', () => {
  let component: UsrPaymentdetailsComponent;
  let fixture: ComponentFixture<UsrPaymentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrPaymentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrPaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
