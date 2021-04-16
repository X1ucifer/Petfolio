import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAddressdetailsComponent } from './usr-addressdetails.component';

describe('UsrAddressdetailsComponent', () => {
  let component: UsrAddressdetailsComponent;
  let fixture: ComponentFixture<UsrAddressdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAddressdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAddressdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
