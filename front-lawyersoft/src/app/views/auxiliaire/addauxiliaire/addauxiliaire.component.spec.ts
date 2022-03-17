import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddauxiliaireComponent } from './addauxiliaire.component';

describe('AddauxiliaireComponent', () => {
  let component: AddauxiliaireComponent;
  let fixture: ComponentFixture<AddauxiliaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddauxiliaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddauxiliaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
