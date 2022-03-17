import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudianceComponent } from './audiance.component';

describe('AudianceComponent', () => {
  let component: AudianceComponent;
  let fixture: ComponentFixture<AudianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
