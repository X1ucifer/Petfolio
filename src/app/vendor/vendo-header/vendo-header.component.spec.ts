import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoHeaderComponent } from './vendo-header.component';

describe('VendoHeaderComponent', () => {
  let component: VendoHeaderComponent;
  let fixture: ComponentFixture<VendoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
