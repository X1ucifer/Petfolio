import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAddnewaddressComponent } from './usr-addnewaddress.component';

describe('UsrAddnewaddressComponent', () => {
  let component: UsrAddnewaddressComponent;
  let fixture: ComponentFixture<UsrAddnewaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAddnewaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAddnewaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
