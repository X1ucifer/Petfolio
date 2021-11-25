import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditCalendarFulltimeComponent } from './doctor-edit-calendar-fulltime.component';

describe('DoctorEditCalendarFulltimeComponent', () => {
  let component: DoctorEditCalendarFulltimeComponent;
  let fixture: ComponentFixture<DoctorEditCalendarFulltimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorEditCalendarFulltimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditCalendarFulltimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
