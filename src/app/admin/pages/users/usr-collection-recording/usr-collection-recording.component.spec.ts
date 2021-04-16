import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCollectionRecordingComponent } from './usr-collection-recording.component';

describe('UsrCollectionRecordingComponent', () => {
  let component: UsrCollectionRecordingComponent;
  let fixture: ComponentFixture<UsrCollectionRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCollectionRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCollectionRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
