import { async, TestBed } from '@angular/core/testing';
import { ListtravailfaireComponent } from './listtravailfaire.component';
describe('ListtravailfaireComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListtravailfaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ListtravailfaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listtravailfaire.component.spec.js.map