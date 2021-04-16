import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegreinguserComponent } from './megreinguser.component';

describe('MegreinguserComponent', () => {
  let component: MegreinguserComponent;
  let fixture: ComponentFixture<MegreinguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegreinguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegreinguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
