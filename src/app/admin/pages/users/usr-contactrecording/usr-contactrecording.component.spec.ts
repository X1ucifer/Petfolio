import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrContactrecordingComponent } from './usr-contactrecording.component';

describe('UsrContactrecordingComponent', () => {
  let component: UsrContactrecordingComponent;
  let fixture: ComponentFixture<UsrContactrecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrContactrecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrContactrecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
