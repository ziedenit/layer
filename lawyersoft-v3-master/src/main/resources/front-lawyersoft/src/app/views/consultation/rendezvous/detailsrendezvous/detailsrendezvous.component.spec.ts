import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsrendezvousComponent } from './detailsrendezvous.component';

describe('DetailsrendezvousComponent', () => {
  let component: DetailsrendezvousComponent;
  let fixture: ComponentFixture<DetailsrendezvousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsrendezvousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
