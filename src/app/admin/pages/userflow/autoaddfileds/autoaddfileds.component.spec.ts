import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoaddfiledsComponent } from './autoaddfileds.component';

describe('AutoaddfiledsComponent', () => {
  let component: AutoaddfiledsComponent;
  let fixture: ComponentFixture<AutoaddfiledsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoaddfiledsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoaddfiledsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
