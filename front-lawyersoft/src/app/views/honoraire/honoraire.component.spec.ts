import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraireComponent } from './honoraire.component';

describe('HonoraireComponent', () => {
  let component: HonoraireComponent;
  let fixture: ComponentFixture<HonoraireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonoraireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
