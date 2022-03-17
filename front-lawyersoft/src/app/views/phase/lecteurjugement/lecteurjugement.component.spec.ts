import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecteurjugementComponent } from './lecteurjugement.component';

describe('LecteurjugementComponent', () => {
  let component: LecteurjugementComponent;
  let fixture: ComponentFixture<LecteurjugementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecteurjugementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecteurjugementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
