import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStatusMarkingComponent } from './client-status-marking.component';

describe('ClientStatusMarkingComponent', () => {
  let component: ClientStatusMarkingComponent;
  let fixture: ComponentFixture<ClientStatusMarkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientStatusMarkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStatusMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
