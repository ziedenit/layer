import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FichierComponent = class FichierComponent {
    constructor() { }
    ngOnInit() {
        this.items = [
            { label: 'Fichier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
};
FichierComponent = __decorate([
    Component({
        selector: 'app-fichier',
        templateUrl: './fichier.component.html',
        styleUrls: ['./fichier.component.css']
    })
], FichierComponent);
export { FichierComponent };
//# sourceMappingURL=fichier.component.js.map