import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
let TypetribunauxComponent = class TypetribunauxComponent {
    constructor(typetribunauxservice, route, messageService) {
        this.typetribunauxservice = typetribunauxservice;
        this.route = route;
        this.messageService = messageService;
        this.clonedTypeTribunal = {};
        this.first = 0;
        this._unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this.typetribunauxservice.getListTypeTribunaux().subscribe((resultat) => {
            this.listTypetribunaux = resultat;
            console.log(this.listTypetribunaux);
        });
        this.items = [
            { label: 'Configuration' },
            { label: 'Type Tribunaux' },
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
        this.clonedTypeTribunal[rowData.typetribunalId] = Object.assign({}, rowData);
    }
    onRowEditSave(rowData) {
        if (rowData.typetribunalId != null) {
            this.updatetypetribunal(rowData);
        }
        else {
            this.addtypetribunal(rowData);
        }
    }
    onRowEditCancel(rowData, index) {
        if (rowData.typetribunalId != null) {
            this.listTypetribunaux[index] = this.clonedTypeTribunal[rowData.typetribunalId];
        }
        else {
            this.listTypetribunaux.shift();
        }
    }
    addRow() {
        const typetribunal = {
            typetribunalid: null,
            typetribunal: null,
        };
        this.listTypetribunaux.unshift(typetribunal);
        this.table.initRowEdit(typetribunal);
    }
    updatetypetribunal(rowData) {
        this.typetribunauxservice.updateTypeTribunaux(rowData)
            .subscribe(data => {
            this.showInfo();
        });
    }
    addtypetribunal(rowData) {
        this.typetribunauxservice.addtypeTribunaux(rowData)
            .subscribe(data => {
            this.listTypetribunaux.shift();
            this.listTypetribunaux.unshift(data);
            this.showSuccess();
        });
    }
    showConfirm() {
        this.messageService.clear();
        this.messageService.add({
            key: 'typetribunalId',
            sticky: true, severity: 'warn',
            summary: 'Voulez-vous supprimer ?',
            detail: 'Confirmation',
        });
    }
    deletetypetribunal(typetribunalId) {
        this.typetribunauxservice.DeleteTypeTribunaux(typetribunalId)
            .subscribe(data => {
            let index = this.listTypetribunaux.findIndex(el => el['typetribunalId'] == typetribunalId);
            this.listTypetribunaux.splice(index, 1);
            this.showWarn();
        });
        this.messageService.clear('typetribunalId');
    }
    onReject() {
        this.messageService.clear('typetribunalId');
    }
};
__decorate([
    ViewChild('table')
], TypetribunauxComponent.prototype, "table", void 0);
TypetribunauxComponent = __decorate([
    Component({
        selector: 'app-typetribunaux',
        templateUrl: './typetribunaux.component.html',
        styleUrls: ['./typetribunaux.component.css'],
        providers: [MessageService]
    })
], TypetribunauxComponent);
export { TypetribunauxComponent };
//# sourceMappingURL=typetribunaux.component.js.map