import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeauxiliaireComponent } from './typeauxiliaire.component';

describe('TypeauxiliaireComponent', () => {
  let component: TypeauxiliaireComponent;
  let fixture: ComponentFixture<TypeauxiliaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeauxiliaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeauxiliaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
