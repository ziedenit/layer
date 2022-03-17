import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjugementComponent } from './addjugement.component';

describe('AddjugementComponent', () => {
  let component: AddjugementComponent;
  let fixture: ComponentFixture<AddjugementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjugementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjugementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
