import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetApprovalRequestComponent } from './set-approval-request.component';

describe('SetApprovalRequestComponent', () => {
  let component: SetApprovalRequestComponent;
  let fixture: ComponentFixture<SetApprovalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetApprovalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetApprovalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
