import { async, TestBed } from '@angular/core/testing';
import { AddtravailfaireComponent } from './addtravailfaire.component';
describe('AddtravailfaireComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddtravailfaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AddtravailfaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=addtravailfaire.component.spec.js.map