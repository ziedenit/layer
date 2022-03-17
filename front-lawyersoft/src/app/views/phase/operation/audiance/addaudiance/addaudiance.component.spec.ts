import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaudianceComponent } from './addaudiance.component';

describe('AddaudianceComponent', () => {
  let component: AddaudianceComponent;
  let fixture: ComponentFixture<AddaudianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaudianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaudianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
