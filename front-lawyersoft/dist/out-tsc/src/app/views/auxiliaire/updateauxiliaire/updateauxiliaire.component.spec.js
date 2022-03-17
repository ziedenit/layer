import { async, TestBed } from '@angular/core/testing';
import { UpdateauxiliaireComponent } from './updateauxiliaire.component';
describe('UpdateauxiliaireComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateauxiliaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateauxiliaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=updateauxiliaire.component.spec.js.map