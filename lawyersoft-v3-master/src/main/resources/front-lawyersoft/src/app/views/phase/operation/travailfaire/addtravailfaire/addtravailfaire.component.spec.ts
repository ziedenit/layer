import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtravailfaireComponent } from './addtravailfaire.component';

describe('AddtravailfaireComponent', () => {
  let component: AddtravailfaireComponent;
  let fixture: ComponentFixture<AddtravailfaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtravailfaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtravailfaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
