import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalloanlistComponent } from './personalloanlist.component';

describe('PersonalloanlistComponent', () => {
  let component: PersonalloanlistComponent;
  let fixture: ComponentFixture<PersonalloanlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalloanlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalloanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
