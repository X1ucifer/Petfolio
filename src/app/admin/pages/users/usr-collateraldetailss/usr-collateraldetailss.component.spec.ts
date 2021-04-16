import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCollateraldetailssComponent } from './usr-collateraldetailss.component';

describe('UsrCollateraldetailssComponent', () => {
  let component: UsrCollateraldetailssComponent;
  let fixture: ComponentFixture<UsrCollateraldetailssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCollateraldetailssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCollateraldetailssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
