import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalaccptpComponent } from './localaccptp.component';

describe('LocalaccptpComponent', () => {
  let component: LocalaccptpComponent;
  let fixture: ComponentFixture<LocalaccptpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalaccptpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalaccptpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
