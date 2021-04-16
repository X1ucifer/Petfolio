import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrScreenaccesscontrolComponent } from './usr-screenaccesscontrol.component';

describe('UsrScreenaccesscontrolComponent', () => {
  let component: UsrScreenaccesscontrolComponent;
  let fixture: ComponentFixture<UsrScreenaccesscontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrScreenaccesscontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrScreenaccesscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
