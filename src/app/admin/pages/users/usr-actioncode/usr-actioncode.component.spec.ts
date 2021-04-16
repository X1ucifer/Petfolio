import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrActioncodeComponent } from './usr-actioncode.component';

describe('UsrActioncodeComponent', () => {
  let component: UsrActioncodeComponent;
  let fixture: ComponentFixture<UsrActioncodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrActioncodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrActioncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
