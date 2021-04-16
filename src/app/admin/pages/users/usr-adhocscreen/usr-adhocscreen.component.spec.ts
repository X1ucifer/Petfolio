import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAdhocscreenComponent } from './usr-adhocscreen.component';

describe('UsrAdhocscreenComponent', () => {
  let component: UsrAdhocscreenComponent;
  let fixture: ComponentFixture<UsrAdhocscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAdhocscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAdhocscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
