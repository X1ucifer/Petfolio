import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccLegalComponent } from './acc-legal.component';

describe('AccLegalComponent', () => {
  let component: AccLegalComponent;
  let fixture: ComponentFixture<AccLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
