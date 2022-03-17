import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitaccesComponent } from './droitacces.component';

describe('DroitaccesComponent', () => {
  let component: DroitaccesComponent;
  let fixture: ComponentFixture<DroitaccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroitaccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
