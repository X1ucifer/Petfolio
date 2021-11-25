import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhidenappointmentComponent } from './showhidenappointment.component';

describe('ShowhidenappointmentComponent', () => {
  let component: ShowhidenappointmentComponent;
  let fixture: ComponentFixture<ShowhidenappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowhidenappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhidenappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
