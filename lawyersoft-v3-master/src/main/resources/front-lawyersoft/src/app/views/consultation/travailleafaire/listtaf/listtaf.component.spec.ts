import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtafComponent } from './listtaf.component';

describe('ListtafComponent', () => {
  let component: ListtafComponent;
  let fixture: ComponentFixture<ListtafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
