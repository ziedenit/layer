import { async, TestBed } from '@angular/core/testing';
import { UpdateintervenantComponent } from './updateintervenant.component';
describe('UpdateintervenantComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateintervenantComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateintervenantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=updateintervenant.component.spec.js.map