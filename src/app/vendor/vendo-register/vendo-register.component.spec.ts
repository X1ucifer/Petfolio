import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoRegisterComponent } from './vendo-register.component';

describe('VendoRegisterComponent', () => {
  let component: VendoRegisterComponent;
  let fixture: ComponentFixture<VendoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
