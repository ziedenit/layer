import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateversementComponent } from './updateversement.component';

describe('UpdateversementComponent', () => {
  let component: UpdateversementComponent;
  let fixture: ComponentFixture<UpdateversementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateversementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateversementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
