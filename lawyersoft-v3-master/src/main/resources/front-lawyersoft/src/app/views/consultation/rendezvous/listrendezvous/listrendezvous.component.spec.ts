import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrendezvousComponent } from './listrendezvous.component';

describe('ListrendezvousComponent', () => {
  let component: ListrendezvousComponent;
  let fixture: ComponentFixture<ListrendezvousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrendezvousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
