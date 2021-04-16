import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyFieldAddComponent } from './agency-field-add.component';

describe('AgencyFieldAddComponent', () => {
  let component: AgencyFieldAddComponent;
  let fixture: ComponentFixture<AgencyFieldAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyFieldAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyFieldAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
