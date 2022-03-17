import { async, TestBed } from '@angular/core/testing';
import { TypeaffaireComponent } from './typeaffaire.component';
describe('TypeaffaireComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeaffaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TypeaffaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=typeaffaire.component.spec.js.map