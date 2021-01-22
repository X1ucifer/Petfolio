import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDoctorDetailsComponent } from './live-doctor-details.component';

describe('LiveDoctorDetailsComponent', () => {
  let component: LiveDoctorDetailsComponent;
  let fixture: ComponentFixture<LiveDoctorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDoctorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
