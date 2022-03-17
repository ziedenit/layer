import { async, TestBed } from '@angular/core/testing';
import { UpdateprecontentieuxComponent } from './updateprecontentieux.component';
describe('UpdateprecontentieuxComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateprecontentieuxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateprecontentieuxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=updateprecontentieux.component.spec.js.map