import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrWorkflowComponent } from './usr-workflow.component';

describe('UsrWorkflowComponent', () => {
  let component: UsrWorkflowComponent;
  let fixture: ComponentFixture<UsrWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
