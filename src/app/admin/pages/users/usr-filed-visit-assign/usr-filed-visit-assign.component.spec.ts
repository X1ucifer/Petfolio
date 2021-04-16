import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrFiledVisitAssignComponent } from './usr-filed-visit-assign.component';

describe('UsrFiledVisitAssignComponent', () => {
  let component: UsrFiledVisitAssignComponent;
  let fixture: ComponentFixture<UsrFiledVisitAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrFiledVisitAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrFiledVisitAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
