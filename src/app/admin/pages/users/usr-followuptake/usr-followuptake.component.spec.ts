import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrFollowuptakeComponent } from './usr-followuptake.component';

describe('UsrFollowuptakeComponent', () => {
  let component: UsrFollowuptakeComponent;
  let fixture: ComponentFixture<UsrFollowuptakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrFollowuptakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrFollowuptakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
