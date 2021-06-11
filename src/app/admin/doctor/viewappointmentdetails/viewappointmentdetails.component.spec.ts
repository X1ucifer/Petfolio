import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappointmentdetailsComponent } from './viewappointmentdetails.component';

describe('ViewappointmentdetailsComponent', () => {
  let component: ViewappointmentdetailsComponent;
  let fixture: ComponentFixture<ViewappointmentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewappointmentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappointmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
