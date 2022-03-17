import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListversementComponent } from './listversement.component';

describe('ListversementComponent', () => {
  let component: ListversementComponent;
  let fixture: ComponentFixture<ListversementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListversementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListversementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
