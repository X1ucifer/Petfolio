import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrForeclosureComponent } from './usr-foreclosure.component';

describe('UsrForeclosureComponent', () => {
  let component: UsrForeclosureComponent;
  let fixture: ComponentFixture<UsrForeclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrForeclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrForeclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
