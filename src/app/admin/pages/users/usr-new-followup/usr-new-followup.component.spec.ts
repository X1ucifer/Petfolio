import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrNewFollowupComponent } from './usr-new-followup.component';

describe('UsrNewFollowupComponent', () => {
  let component: UsrNewFollowupComponent;
  let fixture: ComponentFixture<UsrNewFollowupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrNewFollowupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrNewFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
