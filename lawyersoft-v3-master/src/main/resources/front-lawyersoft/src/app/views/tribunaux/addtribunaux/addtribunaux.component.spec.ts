import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtribunauxComponent } from './addtribunaux.component';

describe('AddtribunauxComponent', () => {
  let component: AddtribunauxComponent;
  let fixture: ComponentFixture<AddtribunauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtribunauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtribunauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
