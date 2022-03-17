import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRdvComponent } from './list-rdv.component';

describe('ListRdvComponent', () => {
  let component: ListRdvComponent;
  let fixture: ComponentFixture<ListRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
