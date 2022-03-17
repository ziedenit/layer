import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRdvComponent } from './add-rdv.component';

describe('AddRdvComponent', () => {
  let component: AddRdvComponent;
  let fixture: ComponentFixture<AddRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
