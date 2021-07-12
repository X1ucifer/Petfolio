import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppaymentComponent } from './apppayment.component';

describe('ApppaymentComponent', () => {
  let component: ApppaymentComponent;
  let fixture: ComponentFixture<ApppaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApppaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApppaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
