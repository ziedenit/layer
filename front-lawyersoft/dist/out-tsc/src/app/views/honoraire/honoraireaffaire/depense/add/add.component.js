import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let AddComponent = class AddComponent {
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
        this.totalDepense = new EventEmitter();
        this.honoraireForm = new FormGroup({
            honnoraireId: new FormControl(null),
            titre: new FormControl(),
            montant: new FormControl(),
            dateHonnoraire: new FormControl(),
            affaireId: new FormControl(),
            consultationId: new FormControl(),
        });
    }
    findByAffaireType() {
        this.honoraireservice.findByAffaireType(this.affaireId, 'depense').subscribe(resultat => {
            this.honoraireservice.listHonnorairedepense = resultat;
            console.log("listHonnorairedepense", this.listHonnorairedepense);
        });
    }
    ngOnInit() {
        this.affaireservice.getAffairebyid(this.affaireId).subscribe(affaire => {
            console.log('affaire', affaire);
            this.affaire = affaire;
        });
    }
    showBasicDialogaddpense() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicaddepense = true;
    }
    resetDepenseForm() {
        this.honoraireForm.reset();
        this.submitted = false;
    }
    showChange(event) {
        console.log(event);
        console.log(this.honoraireForm.value);
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Dépense effectué avec succès' });
    }
    addepense() {
        this.submitted = true;
        console.log("valueform" + this.honoraireForm.value);
        if (this.honoraireForm.valid) {
            console.log(this.honoraireForm.value);
            this.honoraireForm.value.affaireId = this.affaire;
            this.honoraireForm.value.type = 'depense';
            this.honoraireservice.addHonoraire(this.honoraireForm.value).subscribe(data => {
                this.showSuccess();
                this.totalDepense.emit(data.montant);
                this.displayBasicaddepense = false;
                this.honoraireservice.listHonnorairedepense.push(data);
                this.findByAffaireType();
            });
        }
    }
    get f() {
        return this.honoraireForm.controls;
    }
};
__decorate([
    Input("displayBasicaddepense")
], AddComponent.prototype, "displayBasicaddepense", void 0);
__decorate([
    Input("affaireId")
], AddComponent.prototype, "affaireId", void 0);
__decorate([
    Output()
], AddComponent.prototype, "totalDepense", void 0);
AddComponent = __decorate([
    Component({
        selector: 'app-add',
        templateUrl: './add.component.html',
        styleUrls: ['./add.component.css']
    })
], AddComponent);
export { AddComponent };
//# sourceMappingURL=add.component.js.map