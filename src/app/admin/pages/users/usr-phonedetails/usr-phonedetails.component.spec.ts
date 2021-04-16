import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrPhonedetailsComponent } from './usr-phonedetails.component';

describe('UsrPhonedetailsComponent', () => {
  let component: UsrPhonedetailsComponent;
  let fixture: ComponentFixture<UsrPhonedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrPhonedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrPhonedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
