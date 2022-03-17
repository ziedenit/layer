import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhonoraireComponent } from './listhonoraire.component';

describe('ListhonoraireComponent', () => {
  let component: ListhonoraireComponent;
  let fixture: ComponentFixture<ListhonoraireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhonoraireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhonoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
