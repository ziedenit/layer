import { async, TestBed } from '@angular/core/testing';
import { TravailfaireComponent } from './travailfaire.component';
describe('TravailfaireComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TravailfaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TravailfaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=travailfaire.component.spec.js.map