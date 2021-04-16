import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCollectionRecordingMainListComponent } from './usr-collection-recording-main-list.component';

describe('UsrCollectionRecordingMainListComponent', () => {
  let component: UsrCollectionRecordingMainListComponent;
  let fixture: ComponentFixture<UsrCollectionRecordingMainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCollectionRecordingMainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCollectionRecordingMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
