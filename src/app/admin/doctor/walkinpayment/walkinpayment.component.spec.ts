import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinpaymentComponent } from './walkinpayment.component';

describe('WalkinpaymentComponent', () => {
  let component: WalkinpaymentComponent;
  let fixture: ComponentFixture<WalkinpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
