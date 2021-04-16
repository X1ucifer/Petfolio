import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationsingleComponent } from './allocationsingle.component';

describe('AllocationsingleComponent', () => {
  let component: AllocationsingleComponent;
  let fixture: ComponentFixture<AllocationsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
