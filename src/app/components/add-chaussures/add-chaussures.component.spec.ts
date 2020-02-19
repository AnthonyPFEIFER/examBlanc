import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaussuresComponent } from './add-chaussures.component';

describe('AddChaussuresComponent', () => {
  let component: AddChaussuresComponent;
  let fixture: ComponentFixture<AddChaussuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChaussuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChaussuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
