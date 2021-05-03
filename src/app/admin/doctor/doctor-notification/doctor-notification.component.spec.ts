import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNotificationComponent } from './doctor-notification.component';

describe('DoctorNotificationComponent', () => {
  let component: DoctorNotificationComponent;
  let fixture: ComponentFixture<DoctorNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
