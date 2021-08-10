import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoOtpComponent } from './vendo-otp.component';

describe('VendoOtpComponent', () => {
  let component: VendoOtpComponent;
  let fixture: ComponentFixture<VendoOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
