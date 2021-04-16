import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallowexcelComponent } from './reallowexcel.component';

describe('ReallowexcelComponent', () => {
  let component: ReallowexcelComponent;
  let fixture: ComponentFixture<ReallowexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReallowexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallowexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
