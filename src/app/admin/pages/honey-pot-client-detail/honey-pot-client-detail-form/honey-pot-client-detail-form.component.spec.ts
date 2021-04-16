import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyPotClientDetailFormComponent } from './honey-pot-client-detail-form.component';

describe('HoneyPotClientDetailFormComponent', () => {
  let component: HoneyPotClientDetailFormComponent;
  let fixture: ComponentFixture<HoneyPotClientDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneyPotClientDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneyPotClientDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
