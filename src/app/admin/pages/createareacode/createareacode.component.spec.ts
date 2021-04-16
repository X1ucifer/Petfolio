import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateareacodeComponent } from './createareacode.component';

describe('CreateareacodeComponent', () => {
  let component: CreateareacodeComponent;
  let fixture: ComponentFixture<CreateareacodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateareacodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateareacodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
