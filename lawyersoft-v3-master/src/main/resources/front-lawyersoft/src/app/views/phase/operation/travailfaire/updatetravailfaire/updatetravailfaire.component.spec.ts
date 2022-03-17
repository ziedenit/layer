import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetravailfaireComponent } from './updatetravailfaire.component';

describe('UpdatetravailfaireComponent', () => {
  let component: UpdatetravailfaireComponent;
  let fixture: ComponentFixture<UpdatetravailfaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetravailfaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetravailfaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
