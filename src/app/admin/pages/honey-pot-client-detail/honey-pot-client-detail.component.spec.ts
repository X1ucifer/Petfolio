import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyPotClientDetailComponent } from './honey-pot-client-detail.component';

describe('HoneyPotClientDetailComponent', () => {
  let component: HoneyPotClientDetailComponent;
  let fixture: ComponentFixture<HoneyPotClientDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneyPotClientDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneyPotClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
