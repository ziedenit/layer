import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdatetravailfaireComponent = class UpdatetravailfaireComponent {
    constructor(phaseservice, tacheservice, messageService, router, route) {
        this.phaseservice = phaseservice;
        this.tacheservice = tacheservice;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.etat = [
            /* { label: 'En cours', value: 'En cours' },*/
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.isValidFormSubmitted = false;
        this.tacheForm = new FormGroup({
            idTache: new FormControl(null, Validators.required),
            titre: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            dateDebut: new FormControl(null, Validators.required),
            phaseId: new FormControl(),
        });
        this.phaseId = this.route.snapshot.paramMap.get('id');
    }
    findAllbyphase() {
        this.phaseId = this.route.snapshot.paramMap.get('id');
        //  console.log("affaireid" + this.affaireId);
        this.tacheservice.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listTache", resultat);
            this.listTache = resultat;
        });
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnChanges(changes) {
        this.tacheForm.setValue(changes.idTache.currentValue);
        console.log(changes.idTache.currentValue);
    }
    FindAlltacheByPhase() {
        this.tacheservice.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listAudiance", resultat);
            this.tacheservice.listTache = resultat;
        });
    }
    ngOnInit() {
        //this.idtache = this.route.snapshot.paramMap.get('id');
        if (this.idTache != null) {
            this.tacheservice.getTachebyid(this.idtache).subscribe(tache => {
                console.log('tache', tache);
                this.tache = tache;
                this.tacheForm.setValue(tache);
            });
        }
        this.items = [
            { label: 'Phase' },
            { label: 'Opération' },
            { label: 'Travaille à faire' },
            { label: 'Modifier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
    }
    updateTache() {
        if (this.tacheForm.valid) {
            this.submitted = false;
            this.tacheservice.updateTache(this.tacheForm.value).subscribe(tache => {
                this.showInfo();
                this.displayBasicupdate = false;
                this.FindAlltacheByPhase();
            });
        }
        else {
            this.submitted = true;
        }
    }
    resetTacheForm() {
        this.tacheForm.setValue(this.tache);
        this.submitted = false;
    }
};
__decorate([
    Input('displayBasicupdate')
], UpdatetravailfaireComponent.prototype, "displayBasicupdate", void 0);
__decorate([
    Input('idTache')
], UpdatetravailfaireComponent.prototype, "idTache", void 0);
UpdatetravailfaireComponent = __decorate([
    Component({
        selector: 'app-updatetravailfaire',
        templateUrl: './updatetravailfaire.component.html',
        styleUrls: ['./updatetravailfaire.component.css']
    })
], UpdatetravailfaireComponent);
export { UpdatetravailfaireComponent };
//# sourceMappingURL=updatetravailfaire.component.js.map