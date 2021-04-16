import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrReportComponent } from './usr-report.component';

describe('UsrReportComponent', () => {
  let component: UsrReportComponent;
  let fixture: ComponentFixture<UsrReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
