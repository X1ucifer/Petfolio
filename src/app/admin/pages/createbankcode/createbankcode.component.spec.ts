import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebankcodeComponent } from './createbankcode.component';

describe('CreatebankcodeComponent', () => {
  let component: CreatebankcodeComponent;
  let fixture: ComponentFixture<CreatebankcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebankcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebankcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
