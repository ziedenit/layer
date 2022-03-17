import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let ListauxiliaireComponent = class ListauxiliaireComponent {
    constructor(auxiliaireService, confirmationService, messageService) {
        this.auxiliaireService = auxiliaireService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.msgs = [];
        this.first = 0;
    }
    ngOnInit() {
        this.auxiliaireService.getListAuxiliaire().subscribe((aux) => {
            this.listAuxiliaire = aux;
            console.log(this.listAuxiliaire);
        });
        this.cols = [
            { header: 'Nom' },
            { header: 'Prénom' },
            { header: 'Email' },
            { header: 'Télephone' },
            { header: 'Type' }
        ];
        this.items = [
            { label: 'Auxiliaire' },
            { label: 'Liste' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    confirm2(id) {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ?',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.auxiliaireService.deleteAuxiliaire(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.listAuxiliaire.findIndex(el => el['auxiliaireId'] == id);
                    this.listAuxiliaire.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Auxiliaire supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
__decorate([
    ViewChild('tt')
], ListauxiliaireComponent.prototype, "_table", void 0);
ListauxiliaireComponent = __decorate([
    Component({
        selector: 'app-listauxiliaire',
        templateUrl: './listauxiliaire.component.html',
        styleUrls: ['./listauxiliaire.component.css']
    })
], ListauxiliaireComponent);
export { ListauxiliaireComponent };
//# sourceMappingURL=listauxiliaire.component.js.map