import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionaddComponent } from './prescriptionadd.component';

describe('PrescriptionaddComponent', () => {
  let component: PrescriptionaddComponent;
  let fixture: ComponentFixture<PrescriptionaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
