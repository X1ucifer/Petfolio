import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAccountlistComponent } from './acc-accountlist.component';

describe('AccAccountlistComponent', () => {
  let component: AccAccountlistComponent;
  let fixture: ComponentFixture<AccAccountlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAccountlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAccountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
