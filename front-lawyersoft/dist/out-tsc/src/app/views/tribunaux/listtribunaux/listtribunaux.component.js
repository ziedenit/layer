import { __decorate } from "tslib";
import { DroitAcces } from './../../../entitie/droit-acces';
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
let ListtribunauxComponent = class ListtribunauxComponent {
    // tslint:disable-next-line: max-line-length
    constructor(tribunalService, messageService, confirmationService, router) {
        this.tribunalService = tribunalService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.first = 0;
        this.msgs = [];
    }
    ngOnInit() {
        this.droitTribunal = new DroitAcces();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.droitTribunal = this.currentUser.idProfil.droitsAcces.find(el => el['page']['nom'] == "Tribunaux");
        this.tribunalService.getListTribunaux().subscribe((resultat) => {
            this.listTribunaux = resultat;
            /* this.updateRowGroupMetaData();*/
        });
        this.cols = [
            { field: 'nom', header: 'Nom' },
            { field: 'adresse', header: 'Adresse' },
            { field: 'gouvernorat', header: 'Gouvernorat' },
            { field: 'ville', header: 'Ville' },
            { field: 'telephone', header: 'Telephone' },
            { field: 'type', header: 'Type' }
        ];
        this.items = [
            { label: 'Tribunaux' },
            { label: 'Liste' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    reset() {
        this.first = 0;
    }
    confirm2(id) {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ?',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
                this.tribunalService.deleteTribunaux(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.listTribunaux.findIndex(el => el['tribunalId'] == id);
                    this.listTribunaux.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Tribunal supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListtribunauxComponent = __decorate([
    Component({
        selector: 'app-listtribunaux',
        templateUrl: './listtribunaux.component.html',
        styleUrls: ['./listtribunaux.component.css'],
        providers: [ConfirmationService]
    })
], ListtribunauxComponent);
export { ListtribunauxComponent };
//# sourceMappingURL=listtribunaux.component.js.map