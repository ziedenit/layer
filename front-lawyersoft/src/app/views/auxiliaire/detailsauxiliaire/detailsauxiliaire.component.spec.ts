import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsauxiliaireComponent } from './detailsauxiliaire.component';

describe('DetailsauxiliaireComponent', () => {
  let component: DetailsauxiliaireComponent;
  let fixture: ComponentFixture<DetailsauxiliaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsauxiliaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsauxiliaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
