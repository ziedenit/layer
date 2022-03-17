import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdateComponent = class UpdateComponent {
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
            honnoraireId: new FormControl(null, Validators.required),
            titre: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required),
            montant: new FormControl(null, Validators.required),
            reste: new FormControl(),
            dateHonnoraire: new FormControl(null, Validators.required),
            affaireId: new FormControl(null, Validators.required),
            consultationId: new FormControl(null, Validators.required),
        });
        this.affaireId = this.route.snapshot.paramMap.get('id');
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnChanges(changes) {
        this.honoraireForm.setValue(changes.honoraireId.currentValue);
        //console.log(changes.honoraireId.currentValue)
    }
    FindAllbyaffairetype() {
        this.honoraireservice.findByAffaireType(this.affaireId, 'depense').subscribe(resultat => {
            this.honoraireservice.listHonnorairedepense = resultat;
        });
    }
    ngOnInit() {
        if (this.honoraireId != null) {
            //console.log("eeee", this.idAudiance)
            this.honoraireservice.getHonorairebyid(this.honoraireId).subscribe(honnoraire => {
                console.log('honnoraire', honnoraire);
                this.honnoraire = honnoraire;
                this.honoraireForm.setValue(honnoraire);
            });
        }
    }
    showBasicDialogupdate() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicupdatedepense = true;
    }
    showChange(event) {
        console.log(event);
        console.log(this.honoraireForm.value);
    }
    get f() { return this.honoraireForm.controls; }
    updatedepense() {
        this.submitted = false;
        this.honoraireservice.updateHonoraire(this.honoraireForm.value).subscribe(data => {
            this.showInfo();
            this.totalDepense.emit(data.montant);
            this.displayBasicupdatedepense = false;
            // tslint:disable-next-line: no-unused-expression
            this.FindAllbyaffairetype();
        });
    }
    resetHonoraireForm() {
        this.honoraireForm.setValue(this.honnoraire);
        this.submitted = false;
    }
    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
    }
};
__decorate([
    Input('displayBasicupdatedepense')
], UpdateComponent.prototype, "displayBasicupdatedepense", void 0);
__decorate([
    Input('honoraireId')
], UpdateComponent.prototype, "honoraireId", void 0);
__decorate([
    Output()
], UpdateComponent.prototype, "totalDepense", void 0);
UpdateComponent = __decorate([
    Component({
        selector: 'app-update',
        templateUrl: './update.component.html',
        styleUrls: ['./update.component.css']
    })
], UpdateComponent);
export { UpdateComponent };
//# sourceMappingURL=update.component.js.map