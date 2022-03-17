import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListintervenantComponent } from './listintervenant.component';

describe('ListintervenantComponent', () => {
  let component: ListintervenantComponent;
  let fixture: ComponentFixture<ListintervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListintervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListintervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
