import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let AddversementComponent = class AddversementComponent {
    constructor(affaireservice, honoraireservice, confirmationService, messageService, route, router) {
        this.affaireservice = affaireservice;
        this.honoraireservice = honoraireservice;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.msgs = [];
        this.first = 0;
        this.submitted = false;
        this.isValidFormSubmitted = false;
        this.totalVersement = new EventEmitter();
        this.honoraireForm = new FormGroup({
            honoraireId: new FormControl(null),
            titre: new FormControl(),
            montant: new FormControl(),
            dateHonnoraire: new FormControl(),
            affaireId: new FormControl(),
            consultationId: new FormControl(),
        });
    }
    findByAffaireType() {
        this.honoraireservice.findByAffaireType(this.affaireId, 'versement').subscribe(resultat => {
            this.honoraireservice.listHonnoraireversement = resultat;
        });
    }
    ngOnInit() {
        this.affaireservice.getAffairebyid(this.affaireId).subscribe(affaire => {
            console.log('affaire', affaire);
            this.affaire = affaire;
        });
    }
    showBasicDialogaddversement() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicaddversement = true;
    }
    resetVersementForm() {
        this.honoraireForm.reset();
        this.submitted = false;
    }
    showChange(event) {
        console.log(event);
        console.log(this.honoraireForm.value);
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Vérsement effectué avec succès' });
    }
    addversement() {
        this.submitted = true;
        console.log("valueform" + this.honoraireForm.value);
        if (this.honoraireForm.valid) {
            console.log(this.honoraireForm.value);
            this.honoraireForm.value.affaireId = this.affaire;
            this.honoraireForm.value.type = 'versement';
            this.honoraireservice.addHonoraire(this.honoraireForm.value).subscribe(data => {
                this.showSuccess();
                this.totalVersement.emit(data.montant);
                this.displayBasicaddversement = false;
                this.honoraireservice.listHonnoraireversement.push(data);
                this.findByAffaireType();
            });
        }
    }
    get f() {
        return this.honoraireForm.controls;
    }
};
__decorate([
    Input("displayBasicaddversement")
], AddversementComponent.prototype, "displayBasicaddversement", void 0);
__decorate([
    Input("affaireId")
], AddversementComponent.prototype, "affaireId", void 0);
__decorate([
    Output()
], AddversementComponent.prototype, "totalVersement", void 0);
AddversementComponent = __decorate([
    Component({
        selector: 'app-addversement',
        templateUrl: './addversement.component.html',
        styleUrls: ['./addversement.component.css']
    })
], AddversementComponent);
export { AddversementComponent };
//# sourceMappingURL=addversement.component.js.map