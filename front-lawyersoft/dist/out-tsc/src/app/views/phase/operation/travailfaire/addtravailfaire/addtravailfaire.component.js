import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddtravailfaireComponent = class AddtravailfaireComponent {
    constructor(phaseservice, tacheService, messageService, router, route, confirmationService) {
        this.phaseservice = phaseservice;
        this.tacheService = tacheService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.confirmationService = confirmationService;
        this.activeIndex = 1;
        this.msgs = [];
        this.first = 0;
        this.submitted = false;
        this.statuts = [
            { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
            { label: 'Pour notre réplique', value: 'Pour notre réplique' },
            { label: 'Lecture de jugement', value: 'Lecture de jugement' },
        ];
        this.etat = [
        /*  { label: 'En cours', value: 'En cours' },
        { label: 'Cloturé', value: 'Cloturé' },
        { label: 'Reporter', value: 'Reporter' },**/
        ];
        this.isValidFormSubmitted = false;
        this.tacheForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            dateDebut: new FormControl(null, Validators.required),
            phaseId: new FormControl(),
        });
    }
    ngOnInit() {
        console.log("addphaseid", this.phaseId);
        this.phaseservice.getPhasebyid(this.phaseId).subscribe(phase => {
            this.phase = phase;
        });
    }
    showBasicDialogadd() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicadd = true;
    }
    resetTacheForm() {
        this.tacheForm.reset();
        this.submitted = false;
    }
    showChange1(event) {
        console.log(event);
        console.log(this.tacheForm.value);
    }
    showSuccess2() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Travaille a faire effectué avec succès' });
    }
    FindAllTacheByPhase() {
        this.tacheService.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listTache", resultat);
            this.tacheService.listTache = resultat;
        });
    }
    addtache() {
        console.log("valueform");
        this.submitted = true;
        if (this.tacheForm.valid) {
            console.log(this.tacheForm.value);
            // this.audianceForm.value.audianceId = this.audiance;
            this.tacheForm.value.phaseId = this.phase;
            this.tacheService.addTache(this.tacheForm.value).subscribe(data => {
                this.showSuccess2();
                console.log(data);
                this.displayBasicadd = false;
                this.tacheService.listTache.push(data);
                this.FindAllTacheByPhase();
            });
        }
    }
    get f1() {
        return this.tacheForm.controls;
    }
};
__decorate([
    Input("displayBasicadd")
], AddtravailfaireComponent.prototype, "displayBasicadd", void 0);
__decorate([
    Input("phaseId")
], AddtravailfaireComponent.prototype, "phaseId", void 0);
AddtravailfaireComponent = __decorate([
    Component({
        selector: 'app-addtravailfaire',
        templateUrl: './addtravailfaire.component.html',
        styleUrls: ['./addtravailfaire.component.css'],
        providers: [MessageService]
    })
], AddtravailfaireComponent);
export { AddtravailfaireComponent };
//# sourceMappingURL=addtravailfaire.component.js.map