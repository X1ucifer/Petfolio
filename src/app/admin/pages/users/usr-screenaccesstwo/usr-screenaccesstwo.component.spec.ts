import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrScreenaccesstwoComponent } from './usr-screenaccesstwo.component';

describe('UsrScreenaccesstwoComponent', () => {
  let component: UsrScreenaccesstwoComponent;
  let fixture: ComponentFixture<UsrScreenaccesstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrScreenaccesstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrScreenaccesstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
