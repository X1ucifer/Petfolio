import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinnewComponent } from './walkinnew.component';

describe('WalkinnewComponent', () => {
  let component: WalkinnewComponent;
  let fixture: ComponentFixture<WalkinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
