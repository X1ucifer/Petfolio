import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedorBussinessComponent } from './vedor-bussiness.component';

describe('VedorBussinessComponent', () => {
  let component: VedorBussinessComponent;
  let fixture: ComponentFixture<VedorBussinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedorBussinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedorBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
