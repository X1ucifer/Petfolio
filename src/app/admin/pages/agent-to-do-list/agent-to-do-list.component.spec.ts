import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTODOListComponent } from './agent-to-do-list.component';

describe('AgentTODOListComponent', () => {
  let component: AgentTODOListComponent;
  let fixture: ComponentFixture<AgentTODOListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentTODOListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentTODOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
