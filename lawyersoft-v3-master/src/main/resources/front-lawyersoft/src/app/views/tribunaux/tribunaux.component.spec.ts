import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribunauxComponent } from './tribunaux.component';

describe('TribunauxComponent', () => {
  let component: TribunauxComponent;
  let fixture: ComponentFixture<TribunauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribunauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribunauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
