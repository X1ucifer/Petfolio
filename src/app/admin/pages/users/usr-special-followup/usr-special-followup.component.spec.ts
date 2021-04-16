import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrSpecialFollowupComponent } from './usr-special-followup.component';

describe('UsrSpecialFollowupComponent', () => {
  let component: UsrSpecialFollowupComponent;
  let fixture: ComponentFixture<UsrSpecialFollowupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrSpecialFollowupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrSpecialFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
