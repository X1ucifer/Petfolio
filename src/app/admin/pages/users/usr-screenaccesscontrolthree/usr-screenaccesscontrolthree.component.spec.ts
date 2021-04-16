import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrScreenaccesscontrolthreeComponent } from './usr-screenaccesscontrolthree.component';

describe('UsrScreenaccesscontrolthreeComponent', () => {
  let component: UsrScreenaccesscontrolthreeComponent;
  let fixture: ComponentFixture<UsrScreenaccesscontrolthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrScreenaccesscontrolthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrScreenaccesscontrolthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
