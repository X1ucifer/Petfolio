import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermanagmentComponent } from './ordermanagment.component';

describe('OrdermanagmentComponent', () => {
  let component: OrdermanagmentComponent;
  let fixture: ComponentFixture<OrdermanagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdermanagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
