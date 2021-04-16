import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfiloRecordlistComponent } from './portfilo-recordlist.component';

describe('PortfiloRecordlistComponent', () => {
  let component: PortfiloRecordlistComponent;
  let fixture: ComponentFixture<PortfiloRecordlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfiloRecordlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfiloRecordlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
