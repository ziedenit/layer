import { async, TestBed } from '@angular/core/testing';
import { ListauxiliaireComponent } from './listauxiliaire.component';
describe('ListauxiliaireComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListauxiliaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ListauxiliaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listauxiliaire.component.spec.js.map