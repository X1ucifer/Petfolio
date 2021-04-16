import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicleloanlistComponent } from './vechicleloanlist.component';

describe('VechicleloanlistComponent', () => {
  let component: VechicleloanlistComponent;
  let fixture: ComponentFixture<VechicleloanlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VechicleloanlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VechicleloanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
