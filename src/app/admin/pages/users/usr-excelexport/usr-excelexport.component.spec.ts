import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrExcelexportComponent } from './usr-excelexport.component';

describe('UsrExcelexportComponent', () => {
  let component: UsrExcelexportComponent;
  let fixture: ComponentFixture<UsrExcelexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrExcelexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrExcelexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
