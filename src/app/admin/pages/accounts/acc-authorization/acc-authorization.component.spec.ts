import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAuthorizationComponent } from './acc-authorization.component';

describe('AccAuthorizationComponent', () => {
  let component: AccAuthorizationComponent;
  let fixture: ComponentFixture<AccAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
