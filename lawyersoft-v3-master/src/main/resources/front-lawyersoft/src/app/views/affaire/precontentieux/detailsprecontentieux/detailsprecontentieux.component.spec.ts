import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprecontentieuxComponent } from './detailsprecontentieux.component';

describe('DetailsprecontentieuxComponent', () => {
  let component: DetailsprecontentieuxComponent;
  let fixture: ComponentFixture<DetailsprecontentieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsprecontentieuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsprecontentieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
