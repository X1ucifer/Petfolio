import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewPaymentComponent } from './user-new-payment.component';

describe('UserNewPaymentComponent', () => {
  let component: UserNewPaymentComponent;
  let fixture: ComponentFixture<UserNewPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
