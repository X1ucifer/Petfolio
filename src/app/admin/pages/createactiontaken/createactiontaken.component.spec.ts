import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateactiontakenComponent } from './createactiontaken.component';

describe('CreateactiontakenComponent', () => {
  let component: CreateactiontakenComponent;
  let fixture: ComponentFixture<CreateactiontakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateactiontakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateactiontakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
