import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerdetailComponent } from './viewcustomerdetail.component';

describe('ViewcustomerdetailComponent', () => {
  let component: ViewcustomerdetailComponent;
  let fixture: ComponentFixture<ViewcustomerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
