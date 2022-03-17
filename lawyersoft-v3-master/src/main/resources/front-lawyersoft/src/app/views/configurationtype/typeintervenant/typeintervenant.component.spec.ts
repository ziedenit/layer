import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeintervenantComponent } from './typeintervenant.component';

describe('TypeintervenantComponent', () => {
  let component: TypeintervenantComponent;
  let fixture: ComponentFixture<TypeintervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeintervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeintervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
