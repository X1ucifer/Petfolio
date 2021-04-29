import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimeComponent } from './create-time.component';

describe('CreateTimeComponent', () => {
  let component: CreateTimeComponent;
  let fixture: ComponentFixture<CreateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
