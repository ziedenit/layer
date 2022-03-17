import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtafComponent } from './addtaf.component';

describe('AddtafComponent', () => {
  let component: AddtafComponent;
  let fixture: ComponentFixture<AddtafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
