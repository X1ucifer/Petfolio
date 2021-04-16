import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportingToComponent } from './create-reporting-to.component';

describe('CreateReportingToComponent', () => {
  let component: CreateReportingToComponent;
  let fixture: ComponentFixture<CreateReportingToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReportingToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReportingToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
