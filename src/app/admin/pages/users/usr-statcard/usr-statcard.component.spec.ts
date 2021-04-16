import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrStatcardComponent } from './usr-statcard.component';

describe('UsrStatcardComponent', () => {
  let component: UsrStatcardComponent;
  let fixture: ComponentFixture<UsrStatcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrStatcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrStatcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
