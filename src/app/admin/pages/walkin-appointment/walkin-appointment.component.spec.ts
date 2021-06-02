import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinAppointmentComponent } from './walkin-appointment.component';

describe('WalkinAppointmentComponent', () => {
  let component: WalkinAppointmentComponent;
  let fixture: ComponentFixture<WalkinAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
