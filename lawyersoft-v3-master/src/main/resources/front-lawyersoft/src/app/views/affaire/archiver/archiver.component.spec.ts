import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiverComponent } from './archiver.component';

describe('ArchiverComponent', () => {
  let component: ArchiverComponent;
  let fixture: ComponentFixture<ArchiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
