import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalaccallocComponent } from './localaccalloc.component';

describe('LocalaccallocComponent', () => {
  let component: LocalaccallocComponent;
  let fixture: ComponentFixture<LocalaccallocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalaccallocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalaccallocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
