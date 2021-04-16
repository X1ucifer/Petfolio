import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrLoandetailsComponent } from './usr-loandetails.component';

describe('UsrLoandetailsComponent', () => {
  let component: UsrLoandetailsComponent;
  let fixture: ComponentFixture<UsrLoandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrLoandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrLoandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
