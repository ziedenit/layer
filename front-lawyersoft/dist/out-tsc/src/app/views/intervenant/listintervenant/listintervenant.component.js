import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListintervenantComponent = class ListintervenantComponent {
    constructor(intervenantService, confirmationService, messageService) {
        this.intervenantService = intervenantService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.msgs = [];
        this.first = 0;
    }
    ngOnInit() {
        this.intervenantService.getListIntervenant().subscribe((res) => {
            this.listIntervenant = res;
            console.log(this.listIntervenant);
        });
        this.cols = [
            { header: 'Cin' },
            { header: 'Nom' },
            { header: 'Prénom' },
            { header: 'Téléphone' },
            { header: 'Adresse' },
        ];
        this.items = [
            { label: 'Intervenant' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    confirm2(id) {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ? ',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.intervenantService.deleteIntervenant(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.listIntervenant.findIndex(el => el['intervenantid'] == id);
                    this.listIntervenant.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Intervenant supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListintervenantComponent = __decorate([
    Component({
        selector: 'app-listintervenant',
        templateUrl: './listintervenant.component.html',
        styleUrls: ['./listintervenant.component.css']
    })
], ListintervenantComponent);
export { ListintervenantComponent };
//# sourceMappingURL=listintervenant.component.js.map