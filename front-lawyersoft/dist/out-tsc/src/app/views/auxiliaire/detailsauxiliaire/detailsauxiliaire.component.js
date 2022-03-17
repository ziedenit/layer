import { __decorate } from "tslib";
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
let DetailsauxiliaireComponent = class DetailsauxiliaireComponent {
    constructor(typeauxiliaireService, auxiliaireService, messageService, router, route) {
        this.typeauxiliaireService = typeauxiliaireService;
        this.auxiliaireService = auxiliaireService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.auxiliaireForm = new FormGroup({
            auxiliaireId: new FormControl(null),
            nom: new FormControl(),
            prenom: new FormControl(),
            email: new FormControl(),
            gouvernorat: new FormControl(),
            ville: new FormControl(),
            adresse: new FormControl(),
            telephone: new FormControl(),
            typeauxiliaireId: new FormControl()
        });
    }
    ngOnInit() {
        this.typeauxiliaireService.getListTypeAuxiliaire().subscribe((typeAux) => {
            this.listTypeAuxiliaire = typeAux;
        });
        this.idAuxiliaire = this.route.snapshot.paramMap.get('id');
        this.auxiliaireService.getAuxiliairebyid(this.idAuxiliaire).subscribe(auxiliaire => {
            console.log('aux', auxiliaire);
            this.auxiliaire = auxiliaire;
            this.auxiliaireForm.setValue(auxiliaire);
        });
        this.items = [
            { label: 'Auxiliaire' },
            { label: 'Détails' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    get f() { return this.auxiliaireForm.controls; }
};
DetailsauxiliaireComponent = __decorate([
    Component({
        selector: 'app-updateauxiliaire',
        templateUrl: './detailsauxiliaire.component.html',
        styleUrls: ['./detailsauxiliaire.component.css']
    })
], DetailsauxiliaireComponent);
export { DetailsauxiliaireComponent };
//# sourceMappingURL=detailsauxiliaire.component.js.map