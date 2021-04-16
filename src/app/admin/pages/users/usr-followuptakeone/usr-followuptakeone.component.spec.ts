import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrFollowuptakeoneComponent } from './usr-followuptakeone.component';

describe('UsrFollowuptakeoneComponent', () => {
  let component: UsrFollowuptakeoneComponent;
  let fixture: ComponentFixture<UsrFollowuptakeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrFollowuptakeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrFollowuptakeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
