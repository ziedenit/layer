import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfichierComponent } from './listfichier.component';

describe('ListfichierComponent', () => {
  let component: ListfichierComponent;
  let fixture: ComponentFixture<ListfichierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfichierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
