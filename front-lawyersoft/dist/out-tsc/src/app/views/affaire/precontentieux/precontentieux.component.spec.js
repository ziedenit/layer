import { async, TestBed } from '@angular/core/testing';
import { PrecontentieuxComponent } from './precontentieux.component';
describe('PrecontentieuxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrecontentieuxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PrecontentieuxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=precontentieux.component.spec.js.map