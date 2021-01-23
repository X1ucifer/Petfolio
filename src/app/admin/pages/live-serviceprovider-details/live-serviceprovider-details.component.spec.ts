import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveServiceproviderDetailsComponent } from './live-serviceprovider-details.component';

describe('LiveServiceproviderDetailsComponent', () => {
  let component: LiveServiceproviderDetailsComponent;
  let fixture: ComponentFixture<LiveServiceproviderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveServiceproviderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveServiceproviderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
