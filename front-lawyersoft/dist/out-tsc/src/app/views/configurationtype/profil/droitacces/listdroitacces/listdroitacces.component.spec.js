import { async, TestBed } from '@angular/core/testing';
import { ListdroitaccesComponent } from './listdroitacces.component';
describe('ListdroitaccesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListdroitaccesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ListdroitaccesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listdroitacces.component.spec.js.map