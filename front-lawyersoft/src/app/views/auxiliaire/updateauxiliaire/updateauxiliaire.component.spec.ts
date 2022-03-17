import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateauxiliaireComponent } from './updateauxiliaire.component';

describe('UpdateauxiliaireComponent', () => {
  let component: UpdateauxiliaireComponent;
  let fixture: ComponentFixture<UpdateauxiliaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateauxiliaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateauxiliaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
