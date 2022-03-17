import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddversementComponent } from './addversement.component';

describe('AddversementComponent', () => {
  let component: AddversementComponent;
  let fixture: ComponentFixture<AddversementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddversementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddversementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
