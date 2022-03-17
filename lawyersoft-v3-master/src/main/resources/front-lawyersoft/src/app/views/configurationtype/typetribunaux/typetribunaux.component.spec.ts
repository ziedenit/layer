import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypetribunauxComponent } from './typetribunaux.component';

describe('TypetribunauxComponent', () => {
  let component: TypetribunauxComponent;
  let fixture: ComponentFixture<TypetribunauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypetribunauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypetribunauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
