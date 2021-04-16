import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrScreenaccesscontroloneComponent } from './usr-screenaccesscontrolone.component';

describe('UsrScreenaccesscontroloneComponent', () => {
  let component: UsrScreenaccesscontroloneComponent;
  let fixture: ComponentFixture<UsrScreenaccesscontroloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrScreenaccesscontroloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrScreenaccesscontroloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
