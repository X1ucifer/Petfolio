import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPaymentDetailsComponent } from './doctor-payment-details.component';

describe('DoctorPaymentDetailsComponent', () => {
  let component: DoctorPaymentDetailsComponent;
  let fixture: ComponentFixture<DoctorPaymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPaymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
