import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsencoursComponent } from './detailsencours.component';

describe('DetailsencoursComponent', () => {
  let component: DetailsencoursComponent;
  let fixture: ComponentFixture<DetailsencoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsencoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
