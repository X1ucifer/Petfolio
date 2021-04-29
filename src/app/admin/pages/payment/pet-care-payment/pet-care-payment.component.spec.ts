import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCarePaymentComponent } from './pet-care-payment.component';

describe('PetCarePaymentComponent', () => {
  let component: PetCarePaymentComponent;
  let fixture: ComponentFixture<PetCarePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCarePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCarePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
