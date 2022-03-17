import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateencoursComponent } from './updateencours.component';

describe('UpdateencoursComponent', () => {
  let component: UpdateencoursComponent;
  let fixture: ComponentFixture<UpdateencoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateencoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
