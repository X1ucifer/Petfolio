import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAllocationdetailComponent } from './usr-allocationdetail.component';

describe('UsrAllocationdetailComponent', () => {
  let component: UsrAllocationdetailComponent;
  let fixture: ComponentFixture<UsrAllocationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAllocationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAllocationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
