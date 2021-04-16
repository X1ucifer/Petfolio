import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrScreenaccesscontroltwoComponent } from './usr-screenaccesscontroltwo.component';

describe('UsrScreenaccesscontroltwoComponent', () => {
  let component: UsrScreenaccesscontroltwoComponent;
  let fixture: ComponentFixture<UsrScreenaccesscontroltwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrScreenaccesscontroltwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrScreenaccesscontroltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
