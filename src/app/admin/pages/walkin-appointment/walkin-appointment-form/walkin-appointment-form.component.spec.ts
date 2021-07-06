import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinAppointmentFormComponent } from './walkin-appointment-form.component';

describe('WalkinAppointmentFormComponent', () => {
  let component: WalkinAppointmentFormComponent;
  let fixture: ComponentFixture<WalkinAppointmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinAppointmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
