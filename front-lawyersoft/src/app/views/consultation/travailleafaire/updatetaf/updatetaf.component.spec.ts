import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetafComponent } from './updatetaf.component';

describe('UpdatetafComponent', () => {
  let component: UpdatetafComponent;
  let fixture: ComponentFixture<UpdatetafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
