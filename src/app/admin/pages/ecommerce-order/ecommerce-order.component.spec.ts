import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceOrderComponent } from './ecommerce-order.component';

describe('EcommerceOrderComponent', () => {
  let component: EcommerceOrderComponent;
  let fixture: ComponentFixture<EcommerceOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
