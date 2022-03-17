import { async, TestBed } from '@angular/core/testing';
import { AddrendezvousComponent } from './addrendezvous.component';
describe('AddrendezvousComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddrendezvousComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AddrendezvousComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=addrendezvous.component.spec.js.map