import { async, TestBed } from '@angular/core/testing';
import { DetailsrendezvousComponent } from './detailsrendezvous.component';
describe('DetailsrendezvousComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsrendezvousComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsrendezvousComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detailsrendezvous.component.spec.js.map