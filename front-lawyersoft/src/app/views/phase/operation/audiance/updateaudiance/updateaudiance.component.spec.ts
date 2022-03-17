import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaudianceComponent } from './updateaudiance.component';

describe('UpdateaudianceComponent', () => {
  let component: UpdateaudianceComponent;
  let fixture: ComponentFixture<UpdateaudianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateaudianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaudianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
