import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstafComponent } from './detailstaf.component';

describe('DetailstafComponent', () => {
  let component: DetailstafComponent;
  let fixture: ComponentFixture<DetailstafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
