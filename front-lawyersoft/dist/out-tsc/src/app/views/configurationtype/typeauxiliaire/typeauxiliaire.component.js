import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
let TypeauxiliaireComponent = class TypeauxiliaireComponent {
    // tslint:disable-next-line: max-line-length
    constructor(typeauxiliaireservice, route, messageService) {
        this.typeauxiliaireservice = typeauxiliaireservice;
        this.route = route;
        this.messageService = messageService;
        this.clonedTypeAuxiliaire = {};
        this.first = 0;
        this._unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this.typeauxiliaireservice.getListTypeAuxiliaire().subscribe((resultat) => {
            this.listTypeAuxiliaire = resultat;
            console.log(this.listTypeAuxiliaire);
        });
        this.items = [
            { label: 'Configuration' },
            { label: 'Type Auxiliaire' },
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
        this.clonedTypeAuxiliaire[rowData.typeauxiliaireId] = Object.assign({}, rowData);
    }
    onRowEditSave(rowData) {
        if (rowData.typeauxiliaireId != null) {
            this.updatetypeauxilaire(rowData);
        }
        else {
            this.addtypeauxilaire(rowData);
        }
    }
    onRowEditCancel(rowData, index) {
        if (rowData.typeauxiliaireId != null) {
            this.listTypeAuxiliaire[index] = this.clonedTypeAuxiliaire[rowData.typeauxiliaireId];
        }
        else {
            this.listTypeAuxiliaire.shift();
        }
    }
    addRow() {
        const typeauxiliaire = {
            typeauxiliaireid: null,
            typeauxiliaire: null,
        };
        this.listTypeAuxiliaire.unshift(typeauxiliaire);
        this.table.initRowEdit(typeauxiliaire);
    }
    updatetypeauxilaire(rowData) {
        this.typeauxiliaireservice.updateTypeAuxiliaire(rowData)
            .subscribe(data => {
            this.showInfo();
        });
    }
    addtypeauxilaire(rowData) {
        this.typeauxiliaireservice.addTypeAuxiliaire(rowData)
            .subscribe(data => {
            this.listTypeAuxiliaire.shift();
            this.listTypeAuxiliaire.unshift(data);
            this.showSuccess();
        });
    }
    showConfirm() {
        this.messageService.clear();
        this.messageService.add({ key: 'typeauxiliaireId',
            sticky: true, severity: 'warn',
            summary: 'Voulez-vous supprimer ?',
            detail: 'Confirmation',
        });
    }
    deletetypeauxilaire(typeauxiliaireId) {
        this.typeauxiliaireservice.DeleteTypeAuxiliaire(typeauxiliaireId)
            .subscribe(data => {
            let index = this.listTypeAuxiliaire.findIndex(el => el['typeauxiliaireId'] == typeauxiliaireId);
            this.listTypeAuxiliaire.splice(index, 1);
            this.showWarn();
        });
        this.messageService.clear('typeauxiliaireId');
    }
    onReject() {
        this.messageService.clear('typeauxiliaireId');
    }
};
__decorate([
    ViewChild('table')
], TypeauxiliaireComponent.prototype, "table", void 0);
TypeauxiliaireComponent = __decorate([
    Component({
        selector: 'app-typeauxiliaire',
        templateUrl: './typeauxiliaire.component.html',
        styleUrls: ['./typeauxiliaire.component.css'],
        providers: [MessageService],
    })
], TypeauxiliaireComponent);
export { TypeauxiliaireComponent };
//# sourceMappingURL=typeauxiliaire.component.js.map