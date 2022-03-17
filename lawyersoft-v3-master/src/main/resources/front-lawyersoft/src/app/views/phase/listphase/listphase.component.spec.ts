import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListphaseComponent } from './listphase.component';

describe('ListphaseComponent', () => {
  let component: ListphaseComponent;
  let fixture: ComponentFixture<ListphaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListphaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
