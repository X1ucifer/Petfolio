import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrFollowupsaveComponent } from './usr-followupsave.component';

describe('UsrFollowupsaveComponent', () => {
  let component: UsrFollowupsaveComponent;
  let fixture: ComponentFixture<UsrFollowupsaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrFollowupsaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrFollowupsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
