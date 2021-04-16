import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrBouncesComponent } from './usr-bounces.component';

describe('UsrBouncesComponent', () => {
  let component: UsrBouncesComponent;
  let fixture: ComponentFixture<UsrBouncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrBouncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrBouncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
