import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAllocationhistoryComponent } from './usr-allocationhistory.component';

describe('UsrAllocationhistoryComponent', () => {
  let component: UsrAllocationhistoryComponent;
  let fixture: ComponentFixture<UsrAllocationhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAllocationhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAllocationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
