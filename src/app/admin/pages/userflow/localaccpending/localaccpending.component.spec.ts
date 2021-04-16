import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalaccpendingComponent } from './localaccpending.component';

describe('LocalaccpendingComponent', () => {
  let component: LocalaccpendingComponent;
  let fixture: ComponentFixture<LocalaccpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalaccpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalaccpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
