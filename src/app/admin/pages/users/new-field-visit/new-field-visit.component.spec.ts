import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFieldVisitComponent } from './new-field-visit.component';

describe('NewFieldVisitComponent', () => {
  let component: NewFieldVisitComponent;
  let fixture: ComponentFixture<NewFieldVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFieldVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFieldVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
