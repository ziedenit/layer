import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListtafComponent = class ListtafComponent {
    constructor(consultationService, confirmationService, messageService, router) {
        this.consultationService = consultationService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.router = router;
        this.msgs = [];
        this.first = 0;
    }
    ngOnInit() {
        this.consultationService.getListConsultationByType("taf").subscribe((res) => {
            this.listConsultation = res;
            console.log('taf', res);
        });
        this.cols = [
            { header: 'Type' },
            { header: 'Titre' },
            { header: 'Collaborateur' },
            { header: 'Date Début' },
            { header: 'Etat' },
        ];
        this.items = [
            { label: 'Consultation' },
            { label: 'Travail à faire' },
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
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Travail à faire supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListtafComponent = __decorate([
    Component({
        selector: 'app-listtaf',
        templateUrl: './listtaf.component.html',
        styleUrls: ['./listtaf.component.css']
    })
], ListtafComponent);
export { ListtafComponent };
//# sourceMappingURL=listtaf.component.js.map