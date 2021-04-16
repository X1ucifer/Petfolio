import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrFiledVisitMainComponent } from './usr-filed-visit-main.component';

describe('UsrFiledVisitMainComponent', () => {
  let component: UsrFiledVisitMainComponent;
  let fixture: ComponentFixture<UsrFiledVisitMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrFiledVisitMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrFiledVisitMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
