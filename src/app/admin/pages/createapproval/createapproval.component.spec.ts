import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateapprovalComponent } from './createapproval.component';

describe('CreateapprovalComponent', () => {
  let component: CreateapprovalComponent;
  let fixture: ComponentFixture<CreateapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
