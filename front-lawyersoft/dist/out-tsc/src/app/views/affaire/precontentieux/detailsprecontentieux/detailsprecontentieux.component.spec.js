import { async, TestBed } from '@angular/core/testing';
import { DetailsprecontentieuxComponent } from './detailsprecontentieux.component';
describe('DetailsprecontentieuxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsprecontentieuxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsprecontentieuxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detailsprecontentieux.component.spec.js.map