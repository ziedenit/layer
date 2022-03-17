import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdroitaccesComponent } from './listdroitacces.component';

describe('ListdroitaccesComponent', () => {
  let component: ListdroitaccesComponent;
  let fixture: ComponentFixture<ListdroitaccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdroitaccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdroitaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
