import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrUserdetailsComponent } from './usr-userdetails.component';

describe('UsrUserdetailsComponent', () => {
  let component: UsrUserdetailsComponent;
  let fixture: ComponentFixture<UsrUserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrUserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
