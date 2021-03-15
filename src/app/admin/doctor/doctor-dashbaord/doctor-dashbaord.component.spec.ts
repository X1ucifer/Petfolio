import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashbaordComponent } from './doctor-dashbaord.component';

describe('DoctorDashbaordComponent', () => {
  let component: DoctorDashbaordComponent;
  let fixture: ComponentFixture<DoctorDashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
