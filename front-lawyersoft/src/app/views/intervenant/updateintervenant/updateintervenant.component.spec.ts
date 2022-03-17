import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateintervenantComponent } from './updateintervenant.component';

describe('UpdateintervenantComponent', () => {
  let component: UpdateintervenantComponent;
  let fixture: ComponentFixture<UpdateintervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateintervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateintervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
