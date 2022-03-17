import { async, TestBed } from '@angular/core/testing';
import { UpdaterendezvousComponent } from './updaterendezvous.component';
describe('UpdaterendezvousComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdaterendezvousComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdaterendezvousComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=updaterendezvous.component.spec.js.map