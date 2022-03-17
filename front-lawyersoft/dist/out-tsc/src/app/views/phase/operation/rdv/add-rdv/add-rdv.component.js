import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddRdvComponent = class AddRdvComponent {
    constructor(phaseservice, rendezvousService, messageService, router, route, confirmationService) {
        this.phaseservice = phaseservice;
        this.rendezvousService = rendezvousService;
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
            /* { label: 'En cours', value: 'En cours' },*/
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.isValidFormSubmitted = false;
        this.rendezvousForm = new FormGroup({
            daterendezvous: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
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
    resetRendezForm() {
        this.rendezvousForm.reset();
        this.submitted = false;
    }
    showChange2(event) {
        console.log(event);
        console.log(this.rendezvousForm.value);
    }
    showSuccess3() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Rendez-vous effectué avec succès' });
    }
    FindAllRdvByPhase() {
        this.phaseId = this.route.snapshot.paramMap.get('id');
        this.rendezvousService.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listRDV", resultat);
            this.rendezvousService.listRendezvous = resultat;
        });
    }
    addrendezvous() {
        console.log("valueform");
        this.submitted = true;
        if (this.rendezvousForm.valid) {
            console.log(this.rendezvousForm.value);
            // this.audianceForm.value.audianceId = this.audiance;
            this.rendezvousForm.value.phaseId = this.phase;
            this.rendezvousService.addRendezvous(this.rendezvousForm.value).subscribe(data => {
                this.showSuccess3();
                console.log(data);
                this.displayBasicadd = false;
                this.rendezvousService.listRendezvous.push(data);
                this.FindAllRdvByPhase();
            });
        }
    }
    get f2() {
        return this.rendezvousForm.controls;
    }
};
__decorate([
    Input("displayBasicadd")
], AddRdvComponent.prototype, "displayBasicadd", void 0);
__decorate([
    Input("phaseId")
], AddRdvComponent.prototype, "phaseId", void 0);
AddRdvComponent = __decorate([
    Component({
        selector: 'app-add-rdv',
        templateUrl: './add-rdv.component.html',
        styleUrls: ['./add-rdv.component.css'],
        providers: [MessageService]
    })
], AddRdvComponent);
export { AddRdvComponent };
//# sourceMappingURL=add-rdv.component.js.map