import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterendezvousComponent } from './updaterendezvous.component';

describe('UpdaterendezvousComponent', () => {
  let component: UpdaterendezvousComponent;
  let fixture: ComponentFixture<UpdaterendezvousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterendezvousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
