import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrReferaccountComponent } from './usr-referaccount.component';

describe('UsrReferaccountComponent', () => {
  let component: UsrReferaccountComponent;
  let fixture: ComponentFixture<UsrReferaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrReferaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrReferaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
