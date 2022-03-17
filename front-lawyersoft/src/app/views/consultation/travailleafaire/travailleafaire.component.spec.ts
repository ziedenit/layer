import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailleafaireComponent } from './travailleafaire.component';

describe('TravailleafaireComponent', () => {
  let component: TravailleafaireComponent;
  let fixture: ComponentFixture<TravailleafaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravailleafaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravailleafaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
