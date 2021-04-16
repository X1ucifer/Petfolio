import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewallocationComponent } from './newallocation.component';

describe('NewallocationComponent', () => {
  let component: NewallocationComponent;
  let fixture: ComponentFixture<NewallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
