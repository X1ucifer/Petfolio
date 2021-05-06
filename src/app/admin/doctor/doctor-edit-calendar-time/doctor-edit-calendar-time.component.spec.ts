import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditCalendarTimeComponent } from './doctor-edit-calendar-time.component';

describe('DoctorEditCalendarTimeComponent', () => {
  let component: DoctorEditCalendarTimeComponent;
  let fixture: ComponentFixture<DoctorEditCalendarTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorEditCalendarTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditCalendarTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
