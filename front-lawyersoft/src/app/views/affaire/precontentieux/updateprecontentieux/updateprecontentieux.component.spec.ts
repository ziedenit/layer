import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprecontentieuxComponent } from './updateprecontentieux.component';

describe('UpdateprecontentieuxComponent', () => {
  let component: UpdateprecontentieuxComponent;
  let fixture: ComponentFixture<UpdateprecontentieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateprecontentieuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprecontentieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
