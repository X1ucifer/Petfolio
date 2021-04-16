import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrFollowuptrailsComponent } from './usr-followuptrails.component';

describe('UsrFollowuptrailsComponent', () => {
  let component: UsrFollowuptrailsComponent;
  let fixture: ComponentFixture<UsrFollowuptrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrFollowuptrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrFollowuptrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
