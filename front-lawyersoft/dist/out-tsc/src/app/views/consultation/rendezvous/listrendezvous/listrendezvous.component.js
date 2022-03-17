import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListrendezvousComponent = class ListrendezvousComponent {
    constructor(consultationService, confirmationService, messageService, router) {
        this.consultationService = consultationService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.router = router;
        this.msgs = [];
        this.first = 0;
    }
    ngOnInit() {
        this.consultationService.getListConsultationByType("rdv").subscribe((res) => {
            this.listConsultation = res;
            console.log('rdvs', res);
        });
        this.cols = [
            { header: 'Type' },
            { header: 'Titre' },
            { header: 'Collaborateur' },
            { header: 'Date Début' },
            { header: 'Intervenant' },
            { header: 'Etat' },
        ];
        this.items = [
            { label: 'Consultation' },
            { label: 'Rendez-vous' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    confirm2(id) {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ?',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
                this.consultationService.deleteConsultation(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.listConsultation.findIndex(el => el['consultationId'] == id);
                    this.listConsultation.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Rendez-vous supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListrendezvousComponent = __decorate([
    Component({
        selector: 'app-listrendezvous',
        templateUrl: './listrendezvous.component.html',
        styleUrls: ['./listrendezvous.component.css']
    })
], ListrendezvousComponent);
export { ListrendezvousComponent };
//# sourceMappingURL=listrendezvous.component.js.map