import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrOverduedetailstwoComponent } from './usr-overduedetailstwo.component';

describe('UsrOverduedetailstwoComponent', () => {
  let component: UsrOverduedetailstwoComponent;
  let fixture: ComponentFixture<UsrOverduedetailstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrOverduedetailstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrOverduedetailstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
