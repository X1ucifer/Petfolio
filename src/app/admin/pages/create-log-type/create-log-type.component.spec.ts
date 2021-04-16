import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLogTypeComponent } from './create-log-type.component';

describe('CreateLogTypeComponent', () => {
  let component: CreateLogTypeComponent;
  let fixture: ComponentFixture<CreateLogTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLogTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLogTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
