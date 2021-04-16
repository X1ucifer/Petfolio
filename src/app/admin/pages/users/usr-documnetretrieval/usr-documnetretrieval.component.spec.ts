import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDocumnetretrievalComponent } from './usr-documnetretrieval.component';

describe('UsrDocumnetretrievalComponent', () => {
  let component: UsrDocumnetretrievalComponent;
  let fixture: ComponentFixture<UsrDocumnetretrievalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrDocumnetretrievalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrDocumnetretrievalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
