import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrScreenaccessthreeComponent } from './usr-screenaccessthree.component';

describe('UsrScreenaccessthreeComponent', () => {
  let component: UsrScreenaccessthreeComponent;
  let fixture: ComponentFixture<UsrScreenaccessthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrScreenaccessthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrScreenaccessthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
