import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfiloBucketsComponent } from './portfilo-buckets.component';

describe('PortfiloBucketsComponent', () => {
  let component: PortfiloBucketsComponent;
  let fixture: ComponentFixture<PortfiloBucketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfiloBucketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfiloBucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
