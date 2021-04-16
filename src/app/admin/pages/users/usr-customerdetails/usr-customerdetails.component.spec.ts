import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCustomerdetailsComponent } from './usr-customerdetails.component';

describe('UsrCustomerdetailsComponent', () => {
  let component: UsrCustomerdetailsComponent;
  let fixture: ComponentFixture<UsrCustomerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCustomerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
