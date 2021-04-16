import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalaccworkedComponent } from './localaccworked.component';

describe('LocalaccworkedComponent', () => {
  let component: LocalaccworkedComponent;
  let fixture: ComponentFixture<LocalaccworkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalaccworkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalaccworkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
