import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCustomerExplosureComponent } from './usr-customer-explosure.component';

describe('UsrCustomerExplosureComponent', () => {
  let component: UsrCustomerExplosureComponent;
  let fixture: ComponentFixture<UsrCustomerExplosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCustomerExplosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCustomerExplosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
