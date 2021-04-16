import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrScreenaccessoneComponent } from './usr-screenaccessone.component';

describe('UsrScreenaccessoneComponent', () => {
  let component: UsrScreenaccessoneComponent;
  let fixture: ComponentFixture<UsrScreenaccessoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrScreenaccessoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrScreenaccessoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
