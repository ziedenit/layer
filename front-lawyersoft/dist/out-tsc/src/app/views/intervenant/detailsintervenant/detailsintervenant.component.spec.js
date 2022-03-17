import { async, TestBed } from '@angular/core/testing';
import { DetailsintervenantComponent } from './detailsintervenant.component';
describe('DetailsintervenantComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsintervenantComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsintervenantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detailsintervenant.component.spec.js.map