import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrLogoffusersComponent } from './usr-logoffusers.component';

describe('UsrLogoffusersComponent', () => {
  let component: UsrLogoffusersComponent;
  let fixture: ComponentFixture<UsrLogoffusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrLogoffusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrLogoffusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
