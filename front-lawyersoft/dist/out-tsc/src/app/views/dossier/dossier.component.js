import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DossierComponent = class DossierComponent {
    constructor() { }
    ngOnInit() {
        this.items = [
            { label: 'Dossier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
};
DossierComponent = __decorate([
    Component({
        selector: 'app-dossier',
        templateUrl: './dossier.component.html',
        styleUrls: ['./dossier.component.css']
    })
], DossierComponent);
export { DossierComponent };
//# sourceMappingURL=dossier.component.js.map