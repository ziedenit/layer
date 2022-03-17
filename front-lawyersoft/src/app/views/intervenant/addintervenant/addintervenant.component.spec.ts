import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddintervenantComponent } from './addintervenant.component';

describe('AddintervenantComponent', () => {
  let component: AddintervenantComponent;
  let fixture: ComponentFixture<AddintervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddintervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddintervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
