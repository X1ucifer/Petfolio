import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrPoliceCaseComponent } from './usr-police-case.component';

describe('UsrPoliceCaseComponent', () => {
  let component: UsrPoliceCaseComponent;
  let fixture: ComponentFixture<UsrPoliceCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrPoliceCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrPoliceCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
