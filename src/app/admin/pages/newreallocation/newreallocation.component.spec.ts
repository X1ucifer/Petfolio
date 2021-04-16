import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewreallocationComponent } from './newreallocation.component';

describe('NewreallocationComponent', () => {
  let component: NewreallocationComponent;
  let fixture: ComponentFixture<NewreallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewreallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewreallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
