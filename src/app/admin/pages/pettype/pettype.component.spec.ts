import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettypeComponent } from './pettype.component';

describe('PettypeComponent', () => {
  let component: PettypeComponent;
  let fixture: ComponentFixture<PettypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
