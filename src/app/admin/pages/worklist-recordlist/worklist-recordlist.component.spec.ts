import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistRecordlistComponent } from './worklist-recordlist.component';

describe('WorklistRecordlistComponent', () => {
  let component: WorklistRecordlistComponent;
  let fixture: ComponentFixture<WorklistRecordlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklistRecordlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklistRecordlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
