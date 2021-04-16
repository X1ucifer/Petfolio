import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdelinkComponent } from './linkdelink.component';

describe('LinkdelinkComponent', () => {
  let component: LinkdelinkComponent;
  let fixture: ComponentFixture<LinkdelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkdelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkdelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
