import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationexcelComponent } from './allocationexcel.component';

describe('AllocationexcelComponent', () => {
  let component: AllocationexcelComponent;
  let fixture: ComponentFixture<AllocationexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
