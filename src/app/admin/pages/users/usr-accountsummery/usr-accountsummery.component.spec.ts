import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAccountsummeryComponent } from './usr-accountsummery.component';

describe('UsrAccountsummeryComponent', () => {
  let component: UsrAccountsummeryComponent;
  let fixture: ComponentFixture<UsrAccountsummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAccountsummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAccountsummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
