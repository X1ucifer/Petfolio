import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrSkipTracingAssignComponent } from './usr-skip-tracing-assign.component';

describe('UsrSkipTracingAssignComponent', () => {
  let component: UsrSkipTracingAssignComponent;
  let fixture: ComponentFixture<UsrSkipTracingAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrSkipTracingAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrSkipTracingAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
