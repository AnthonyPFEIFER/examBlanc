import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullChaussureComponent } from './full-chaussure.component';

describe('FullChaussureComponent', () => {
  let component: FullChaussureComponent;
  let fixture: ComponentFixture<FullChaussureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullChaussureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullChaussureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
