import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrRpoComponent } from './usr-rpo.component';

describe('UsrRpoComponent', () => {
  let component: UsrRpoComponent;
  let fixture: ComponentFixture<UsrRpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrRpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrRpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
