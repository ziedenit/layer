import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
let TypeaffaireComponent = class TypeaffaireComponent {
    constructor(typeaffaireservice, route, messageService) {
        this.typeaffaireservice = typeaffaireservice;
        this.route = route;
        this.messageService = messageService;
        this.clonedTypeAffaire = {};
        this.first = 0;
        this._unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this.typeaffaireservice.getListTypeAffaire().subscribe((resultat) => {
            this.listTypeAffaire = resultat;
            console.log(this.listTypeAffaire);
        });
        this.items = [
            { label: 'Configuration' },
            { label: 'Type Affaire' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    reset() {
        this.first = 0;
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'ajout avec succée' });
    }
    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
    }
    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Info', detail: 'Supprimé avec succée' });
    }
    onRowEditInit(rowData) {
        this.clonedTypeAffaire[rowData.typeaffaireId] = Object.assign({}, rowData);
    }
    onRowEditSave(rowData) {
        if (rowData.typeaffaireId != null) {
            this.updatetypeaffaire(rowData);
        }
        else {
            this.addtypeaffaire(rowData);
        }
    }
    onRowEditCancel(rowData, index) {
        if (rowData.typeaffaireId != null) {
            this.listTypeAffaire[index] = this.clonedTypeAffaire[rowData.typeaffaireId];
        }
        else {
            this.listTypeAffaire.shift();
        }
    }
    addRow() {
        const typeaffaire = {
            typeaffaireid: null,
            typeaffaire: null,
        };
        this.listTypeAffaire.unshift(typeaffaire);
        this.table.initRowEdit(typeaffaire);
    }
    updatetypeaffaire(rowData) {
        this.typeaffaireservice.updateTypeAffaire(rowData)
            .subscribe(data => {
            this.showInfo();
        });
    }
    addtypeaffaire(rowData) {
        this.typeaffaireservice.addTypeAffaire(rowData)
            .subscribe(data => {
            this.listTypeAffaire.shift();
            this.listTypeAffaire.unshift(data);
            this.showSuccess();
        });
    }
    showConfirm() {
        this.messageService.clear();
        this.messageService.add({ key: 'typeaffaireId',
            sticky: true, severity: 'warn',
            summary: 'Voulez-vous supprimer ?',
            detail: 'Confirmation',
        });
    }
    deletetypeaffaire(typeaffaireId) {
        this.typeaffaireservice.DeleteTypeAffaire(typeaffaireId)
            .subscribe(data => {
            let index = this.listTypeAffaire.findIndex(el => el['typeaffaireId'] == typeaffaireId);
            this.listTypeAffaire.splice(index, 1);
            this.showWarn();
        });
        this.messageService.clear('typeaffaireId');
    }
    onReject() {
        this.messageService.clear('typeaffaireId');
    }
};
__decorate([
    ViewChild('table')
], TypeaffaireComponent.prototype, "table", void 0);
TypeaffaireComponent = __decorate([
    Component({
        selector: 'app-typeaffaire',
        templateUrl: './typeaffaire.component.html',
        styleUrls: ['./typeaffaire.component.css'],
        providers: [MessageService]
    })
], TypeaffaireComponent);
export { TypeaffaireComponent };
//# sourceMappingURL=typeaffaire.component.js.map