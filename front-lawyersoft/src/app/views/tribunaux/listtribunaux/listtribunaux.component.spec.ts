import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtribunauxComponent } from './listtribunaux.component';

describe('ListtribunauxComponent', () => {
  let component: ListtribunauxComponent;
  let fixture: ComponentFixture<ListtribunauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtribunauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtribunauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
