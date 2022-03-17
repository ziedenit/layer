import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoursComponent } from './encours.component';

describe('EncoursComponent', () => {
  let component: EncoursComponent;
  let fixture: ComponentFixture<EncoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
