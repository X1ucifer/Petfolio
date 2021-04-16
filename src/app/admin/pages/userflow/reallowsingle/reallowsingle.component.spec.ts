import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallowsingleComponent } from './reallowsingle.component';

describe('ReallowsingleComponent', () => {
  let component: ReallowsingleComponent;
  let fixture: ComponentFixture<ReallowsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReallowsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallowsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
