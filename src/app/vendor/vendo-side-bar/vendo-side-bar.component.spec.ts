import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoSideBarComponent } from './vendo-side-bar.component';

describe('VendoSideBarComponent', () => {
  let component: VendoSideBarComponent;
  let fixture: ComponentFixture<VendoSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
