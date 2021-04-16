import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusMarkingComponent } from './user-status-marking.component';

describe('UserStatusMarkingComponent', () => {
  let component: UserStatusMarkingComponent;
  let fixture: ComponentFixture<UserStatusMarkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatusMarkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
