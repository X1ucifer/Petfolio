import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewSettlementComponent } from './user-new-settlement.component';

describe('UserNewSettlementComponent', () => {
  let component: UserNewSettlementComponent;
  let fixture: ComponentFixture<UserNewSettlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewSettlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
