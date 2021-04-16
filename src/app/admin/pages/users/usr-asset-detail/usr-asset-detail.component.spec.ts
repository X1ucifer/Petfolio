import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAssetDetailComponent } from './usr-asset-detail.component';

describe('UsrAssetDetailComponent', () => {
  let component: UsrAssetDetailComponent;
  let fixture: ComponentFixture<UsrAssetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAssetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAssetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
