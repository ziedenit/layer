import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaireComponent } from './auxiliaire.component';

describe('AuxiliaireComponent', () => {
  let component: AuxiliaireComponent;
  let fixture: ComponentFixture<AuxiliaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
