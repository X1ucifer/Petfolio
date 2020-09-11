import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetBreedTypeComponent } from './pet-breed-type.component';

describe('PetBreedTypeComponent', () => {
  let component: PetBreedTypeComponent;
  let fixture: ComponentFixture<PetBreedTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetBreedTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetBreedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
