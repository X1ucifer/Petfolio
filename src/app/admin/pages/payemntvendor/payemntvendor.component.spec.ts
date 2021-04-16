import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayemntvendorComponent } from './payemntvendor.component';

describe('PayemntvendorComponent', () => {
  let component: PayemntvendorComponent;
  let fixture: ComponentFixture<PayemntvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayemntvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayemntvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
