import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPetHandledComponent } from './doc-pet-handled.component';

describe('DocPetHandledComponent', () => {
  let component: DocPetHandledComponent;
  let fixture: ComponentFixture<DocPetHandledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocPetHandledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPetHandledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
