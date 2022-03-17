import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListauxiliaireComponent } from './listauxiliaire.component';

describe('ListauxiliaireComponent', () => {
  let component: ListauxiliaireComponent;
  let fixture: ComponentFixture<ListauxiliaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListauxiliaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListauxiliaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
