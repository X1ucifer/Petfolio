import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistBucketsComponent } from './worklist-buckets.component';

describe('WorklistBucketsComponent', () => {
  let component: WorklistBucketsComponent;
  let fixture: ComponentFixture<WorklistBucketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklistBucketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklistBucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
