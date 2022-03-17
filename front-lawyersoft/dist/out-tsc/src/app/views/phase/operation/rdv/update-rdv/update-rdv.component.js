import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdateRdvComponent = class UpdateRdvComponent {
    constructor(phaseservice, rendezvousservice, messageService, router, route) {
        this.phaseservice = phaseservice;
        this.rendezvousservice = rendezvousservice;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.etat = [
            /*{ label: 'En cours', value: 'En cours' },*/
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.rendezvousForm = new FormGroup({
            idrendezvous: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            daterendezvous: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            phaseId: new FormControl(),
        });
        this.phaseId = this.route.snapshot.paramMap.get('id');
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnChanges(changes) {
        console.log(changes);
        this.rendezvousForm.setValue(changes.idrendezvous.currentValue);
        console.log(changes.idrendezvous.currentValue);
    }
    FindAllRdvByPhase() {
        this.rendezvousservice.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listAudiance", resultat);
            this.rendezvousservice.listRendezvous = resultat;
        });
    }
    ngOnInit() {
        this.idrendezvous = this.route.snapshot.paramMap.get('id');
        if (this.idrendezvous != null) {
            this.rendezvousservice.getRendezvousbyid(this.idrendezvous).subscribe(rendezvous => {
                console.log('rendezvous', rendezvous);
                this.rendezvous = rendezvous;
                this.rendezvousForm.setValue(rendezvous);
            });
        }
        this.items = [
            { label: 'Phase' },
            { label: 'Opération' },
            { label: 'Rendez-Vous' },
            { label: 'Modifier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    showBasicDialogupdate() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicupdate = true;
    }
    showChange(event) {
        console.log(event);
        console.log(this.rendezvousForm.value);
    }
    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
    }
    updateRendez() {
        if (this.rendezvousForm.valid) {
            this.submitted = false;
            this.rendezvousservice.updateRendezvous(this.rendezvousForm.value).subscribe(rdv => {
                this.showInfo();
                this.displayBasicupdate = false;
                // tslint:disable-next-line: no-unused-expression
                this.FindAllRdvByPhase();
            });
        }
        else {
            this.submitted = true;
        }
    }
};
__decorate([
    Input('displayBasicupdate')
], UpdateRdvComponent.prototype, "displayBasicupdate", void 0);
__decorate([
    Input('idrendezvous')
], UpdateRdvComponent.prototype, "idrendezvous", void 0);
UpdateRdvComponent = __decorate([
    Component({
        selector: 'app-update-rdv',
        templateUrl: './update-rdv.component.html',
        styleUrls: ['./update-rdv.component.css'],
        providers: [MessageService]
    })
], UpdateRdvComponent);
export { UpdateRdvComponent };
//# sourceMappingURL=update-rdv.component.js.map