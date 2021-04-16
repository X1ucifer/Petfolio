import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetracingtoolsComponent } from './createtracingtools.component';

describe('CreatetracingtoolsComponent', () => {
  let component: CreatetracingtoolsComponent;
  let fixture: ComponentFixture<CreatetracingtoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetracingtoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetracingtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
