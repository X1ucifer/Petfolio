import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenteditComponent } from './appointmentedit.component';

describe('AppointmenteditComponent', () => {
  let component: AppointmenteditComponent;
  let fixture: ComponentFixture<AppointmenteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmenteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
