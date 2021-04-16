import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstallocationsComponent } from './firstallocations.component';

describe('FirstallocationsComponent', () => {
  let component: FirstallocationsComponent;
  let fixture: ComponentFixture<FirstallocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstallocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstallocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
