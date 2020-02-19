import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChaussuresComponent } from './edit-chaussures.component';

describe('EditChaussuresComponent', () => {
  let component: EditChaussuresComponent;
  let fixture: ComponentFixture<EditChaussuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChaussuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChaussuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
