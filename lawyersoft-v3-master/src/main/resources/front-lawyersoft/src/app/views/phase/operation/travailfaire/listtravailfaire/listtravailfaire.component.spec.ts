import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtravailfaireComponent } from './listtravailfaire.component';

describe('ListtravailfaireComponent', () => {
  let component: ListtravailfaireComponent;
  let fixture: ComponentFixture<ListtravailfaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtravailfaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtravailfaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
