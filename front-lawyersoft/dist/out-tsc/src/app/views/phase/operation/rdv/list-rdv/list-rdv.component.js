import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let ListRdvComponent = class ListRdvComponent {
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
        this.isValidFormSubmitted = false;
        this.rendezvousForm = new FormGroup({
            etat: new FormControl(null, Validators.required),
            daterendezvous: new FormControl(Date.now()),
            description: new FormControl(null, Validators.required),
            phaseId: new FormControl(),
        });
        this.phaseId = this.route.snapshot.paramMap.get('id');
    }
    FindAllRdvByPhase() {
        this.phaseId = this.route.snapshot.paramMap.get('id');
        this.rendezvousService.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listRDV", resultat);
            this.rendezvousService.listRendezvous = resultat;
        });
    }
    ngOnInit() {
        this.phaseId = this.route.snapshot.paramMap.get('id');
        //  console.log("affaireid" + this.affaireId);
        this.FindAllRdvByPhase();
        this.cols2 = [
            { header: "Date" },
            { header: "Description" },
            { header: "Etat" },
        ];
        this.items = [
            { label: 'Phase' },
            { label: 'Opérations' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    showBasicDialogadd() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicadd = true;
    }
    showBasicDialogupdate(id) {
        console.log("dialog");
        console.log("id", id);
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicupdate = true;
        this.idrendezvous = id;
        console.log("idaudiance", this.idrendezvous);
    }
    showChange2(event) {
        console.log(event);
        console.log(this.rendezvousForm.value);
    }
    confirm4(id) {
        this.confirmationService.confirm({
            message: 'Êtes-vous sûr de vouloir supprimer',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.rendezvousService.deleteRendezvous(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.rendezvousService.listRendezvous.findIndex(el => el['rendezvousId'] == id);
                    this.rendezvousService.listRendezvous.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Rendez-vous supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListRdvComponent = __decorate([
    Component({
        selector: 'app-list-rdv',
        templateUrl: './list-rdv.component.html',
        styleUrls: ['./list-rdv.component.css'],
        providers: [MessageService]
    })
], ListRdvComponent);
export { ListRdvComponent };
//# sourceMappingURL=list-rdv.component.js.map