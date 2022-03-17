import { async, TestBed } from '@angular/core/testing';
import { HonoraireaffaireComponent } from './honoraireaffaire.component';
describe('HonoraireaffaireComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HonoraireaffaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HonoraireaffaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=honoraireaffaire.component.spec.js.map