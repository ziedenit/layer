import { async, TestBed } from '@angular/core/testing';
import { AdddroitaccesComponent } from './adddroitacces.component';
describe('AdddroitaccesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdddroitaccesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdddroitaccesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=adddroitacces.component.spec.js.map