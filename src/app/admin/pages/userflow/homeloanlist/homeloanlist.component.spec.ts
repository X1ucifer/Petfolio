import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloanlistComponent } from './homeloanlist.component';

describe('HomeloanlistComponent', () => {
  let component: HomeloanlistComponent;
  let fixture: ComponentFixture<HomeloanlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloanlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
