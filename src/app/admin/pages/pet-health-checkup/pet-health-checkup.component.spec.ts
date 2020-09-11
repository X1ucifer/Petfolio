import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetHealthCheckupComponent } from './pet-health-checkup.component';

describe('PetHealthCheckupComponent', () => {
  let component: PetHealthCheckupComponent;
  let fixture: ComponentFixture<PetHealthCheckupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetHealthCheckupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetHealthCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
