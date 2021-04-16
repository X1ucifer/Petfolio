import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualTemporaryAllocationComponent } from './dual-temporary-allocation.component';

describe('DualTemporaryAllocationComponent', () => {
  let component: DualTemporaryAllocationComponent;
  let fixture: ComponentFixture<DualTemporaryAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualTemporaryAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualTemporaryAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
