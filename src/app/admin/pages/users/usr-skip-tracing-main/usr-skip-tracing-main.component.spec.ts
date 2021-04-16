import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrSkipTracingMainComponent } from './usr-skip-tracing-main.component';

describe('UsrSkipTracingMainComponent', () => {
  let component: UsrSkipTracingMainComponent;
  let fixture: ComponentFixture<UsrSkipTracingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrSkipTracingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrSkipTracingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
