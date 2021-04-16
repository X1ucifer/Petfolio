import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAuthorViewComponent } from './acc-author-view.component';

describe('AccAuthorViewComponent', () => {
  let component: AccAuthorViewComponent;
  let fixture: ComponentFixture<AccAuthorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAuthorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAuthorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
