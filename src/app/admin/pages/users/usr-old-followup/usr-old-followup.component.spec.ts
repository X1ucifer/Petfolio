import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrOldFollowupComponent } from './usr-old-followup.component';

describe('UsrOldFollowupComponent', () => {
  let component: UsrOldFollowupComponent;
  let fixture: ComponentFixture<UsrOldFollowupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrOldFollowupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrOldFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
