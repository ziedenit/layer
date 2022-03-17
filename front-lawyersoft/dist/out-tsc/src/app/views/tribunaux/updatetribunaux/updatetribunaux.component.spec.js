import { async, TestBed } from '@angular/core/testing';
import { UpdatetribunauxComponent } from './updatetribunaux.component';
describe('UpdatetribunauxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdatetribunauxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdatetribunauxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=updatetribunaux.component.spec.js.map