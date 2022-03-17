import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaudianceComponent } from './listaudiance.component';

describe('ListaudianceComponent', () => {
  let component: ListaudianceComponent;
  let fixture: ComponentFixture<ListaudianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaudianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaudianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
