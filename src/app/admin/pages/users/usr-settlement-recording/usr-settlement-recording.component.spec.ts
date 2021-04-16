import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrSettlementRecordingComponent } from './usr-settlement-recording.component';

describe('UsrSettlementRecordingComponent', () => {
  let component: UsrSettlementRecordingComponent;
  let fixture: ComponentFixture<UsrSettlementRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrSettlementRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrSettlementRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
