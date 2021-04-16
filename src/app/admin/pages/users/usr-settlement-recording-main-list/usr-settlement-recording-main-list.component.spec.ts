import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrSettlementRecordingMainListComponent } from './usr-settlement-recording-main-list.component';

describe('UsrSettlementRecordingMainListComponent', () => {
  let component: UsrSettlementRecordingMainListComponent;
  let fixture: ComponentFixture<UsrSettlementRecordingMainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrSettlementRecordingMainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrSettlementRecordingMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
