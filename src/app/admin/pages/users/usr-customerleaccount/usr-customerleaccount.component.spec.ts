import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCustomerleaccountComponent } from './usr-customerleaccount.component';

describe('UsrCustomerleaccountComponent', () => {
  let component: UsrCustomerleaccountComponent;
  let fixture: ComponentFixture<UsrCustomerleaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCustomerleaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCustomerleaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
