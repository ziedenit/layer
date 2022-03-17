import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaffaireComponent } from './addaffaire.component';

describe('AddaffaireComponent', () => {
  let component: AddaffaireComponent;
  let fixture: ComponentFixture<AddaffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
