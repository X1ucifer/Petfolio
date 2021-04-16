import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAccListComponent } from './agent-acc-list.component';

describe('AgentAccListComponent', () => {
  let component: AgentAccListComponent;
  let fixture: ComponentFixture<AgentAccListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAccListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
