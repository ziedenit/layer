import { async, TestBed } from '@angular/core/testing';
import { StatusaudianceComponent } from './statusaudiance.component';
describe('StatusaudianceComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StatusaudianceComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(StatusaudianceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=statusaudiance.component.spec.js.map