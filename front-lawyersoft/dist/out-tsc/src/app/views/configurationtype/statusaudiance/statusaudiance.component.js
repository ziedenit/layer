import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
let StatusaudianceComponent = class StatusaudianceComponent {
    constructor(statusaudianceService, route, messageService) {
        this.statusaudianceService = statusaudianceService;
        this.route = route;
        this.messageService = messageService;
        this.clonedStatusAudiance = {};
        this.first = 0;
        this._unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this.statusaudianceService.getListStatusAudiance().subscribe((resultat) => {
            this.listStatusAudiance = resultat;
            console.log(this.listStatusAudiance);
        });
        this.items = [
            { label: 'Configuration' },
            { label: 'Status Audiance' },
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
        this.clonedStatusAudiance[rowData.statusId] = Object.assign({}, rowData);
    }
    onRowEditSave(rowData) {
        if (rowData.StatusId != null) {
            this.updatestatus(rowData);
        }
        else {
            this.addstatus(rowData);
        }
    }
    onRowEditCancel(rowData, index) {
        if (rowData.statusId != null) {
            this.listStatusAudiance[index] = this.clonedStatusAudiance[rowData.statusId];
        }
        else {
            this.listStatusAudiance.shift();
        }
    }
    addRow() {
        const status = {
            statusId: null,
            status: null,
        };
        this.listStatusAudiance.unshift(status);
        this.table.initRowEdit(status);
    }
    updatestatus(rowData) {
        this.statusaudianceService.updateStatusAudiance(rowData)
            .subscribe(data => {
            this.showInfo();
        });
    }
    addstatus(rowData) {
        this.statusaudianceService.addStatusAudiance(rowData)
            .subscribe(data => {
            this.listStatusAudiance.shift();
            this.listStatusAudiance.unshift(data);
            this.showSuccess();
        });
    }
    showConfirm() {
        this.messageService.clear();
        this.messageService.add({
            key: 'statusId',
            sticky: true, severity: 'warn',
            summary: 'Voulez-vous supprimer ?',
            detail: 'Confirmation',
        });
    }
    deletestatus(statusId) {
        this.statusaudianceService.deleteStatusAudiance(statusId)
            .subscribe(data => {
            let index = this.listStatusAudiance.findIndex(el => el['statusId'] == statusId);
            this.listStatusAudiance.splice(index, 1);
            this.showWarn();
        });
        this.messageService.clear('statusId');
    }
    onReject() {
        this.messageService.clear('statusId');
    }
};
__decorate([
    ViewChild('table')
], StatusaudianceComponent.prototype, "table", void 0);
StatusaudianceComponent = __decorate([
    Component({
        selector: 'app-statusaudiance',
        templateUrl: './statusaudiance.component.html',
        styleUrls: ['./statusaudiance.component.css'],
        providers: [MessageService]
    })
], StatusaudianceComponent);
export { StatusaudianceComponent };
//# sourceMappingURL=statusaudiance.component.js.map