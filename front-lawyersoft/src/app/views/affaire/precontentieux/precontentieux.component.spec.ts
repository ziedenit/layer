import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecontentieuxComponent } from './precontentieux.component';

describe('PrecontentieuxComponent', () => {
  let component: PrecontentieuxComponent;
  let fixture: ComponentFixture<PrecontentieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecontentieuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecontentieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
