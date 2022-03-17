import { async, TestBed } from '@angular/core/testing';
import { ListrendezvousComponent } from './listrendezvous.component';
describe('ListrendezvousComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListrendezvousComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ListrendezvousComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listrendezvous.component.spec.js.map