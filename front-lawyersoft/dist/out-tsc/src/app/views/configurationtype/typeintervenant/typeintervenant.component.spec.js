import { async, TestBed } from '@angular/core/testing';
import { TypeintervenantComponent } from './typeintervenant.component';
describe('TypeintervenantComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeintervenantComponent]
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
//# sourceMappingURL=typeintervenant.component.spec.js.map