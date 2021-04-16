import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefieldvisitcodeComponent } from './createfieldvisitcode.component';

describe('CreatefieldvisitcodeComponent', () => {
  let component: CreatefieldvisitcodeComponent;
  let fixture: ComponentFixture<CreatefieldvisitcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefieldvisitcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefieldvisitcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
