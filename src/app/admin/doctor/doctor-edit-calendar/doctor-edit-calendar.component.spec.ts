import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditCalendarComponent } from './doctor-edit-calendar.component';

describe('DoctorEditCalendarComponent', () => {
  let component: DoctorEditCalendarComponent;
  let fixture: ComponentFixture<DoctorEditCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorEditCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
