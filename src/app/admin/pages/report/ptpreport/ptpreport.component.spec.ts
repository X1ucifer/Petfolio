import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtpreportComponent } from './ptpreport.component';

describe('PtpreportComponent', () => {
  let component: PtpreportComponent;
  let fixture: ComponentFixture<PtpreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtpreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtpreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
