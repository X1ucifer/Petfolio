import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementtrackerComponent } from './settlementtracker.component';

describe('SettlementtrackerComponent', () => {
  let component: SettlementtrackerComponent;
  let fixture: ComponentFixture<SettlementtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
