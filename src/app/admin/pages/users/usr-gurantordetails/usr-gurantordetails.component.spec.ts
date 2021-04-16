import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrGurantordetailsComponent } from './usr-gurantordetails.component';

describe('UsrGurantordetailsComponent', () => {
  let component: UsrGurantordetailsComponent;
  let fixture: ComponentFixture<UsrGurantordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrGurantordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrGurantordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
