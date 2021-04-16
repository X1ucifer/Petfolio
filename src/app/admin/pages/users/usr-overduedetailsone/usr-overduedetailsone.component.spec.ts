import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrOverduedetailsoneComponent } from './usr-overduedetailsone.component';

describe('UsrOverduedetailsoneComponent', () => {
  let component: UsrOverduedetailsoneComponent;
  let fixture: ComponentFixture<UsrOverduedetailsoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrOverduedetailsoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrOverduedetailsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
