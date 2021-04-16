import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDelinquencyflowComponent } from './usr-delinquencyflow.component';

describe('UsrDelinquencyflowComponent', () => {
  let component: UsrDelinquencyflowComponent;
  let fixture: ComponentFixture<UsrDelinquencyflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrDelinquencyflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrDelinquencyflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
