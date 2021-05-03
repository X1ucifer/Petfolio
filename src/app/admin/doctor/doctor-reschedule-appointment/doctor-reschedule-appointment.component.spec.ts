import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRescheduleAppointmentComponent } from './doctor-reschedule-appointment.component';

describe('DoctorRescheduleAppointmentComponent', () => {
  let component: DoctorRescheduleAppointmentComponent;
  let fixture: ComponentFixture<DoctorRescheduleAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorRescheduleAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRescheduleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
