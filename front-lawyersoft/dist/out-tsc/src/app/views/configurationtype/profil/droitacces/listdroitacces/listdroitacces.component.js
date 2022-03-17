import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let ListdroitaccesComponent = class ListdroitaccesComponent {
    constructor(droitaccesService, pagesService, messageService, route) {
        this.droitaccesService = droitaccesService;
        this.pagesService = pagesService;
        this.messageService = messageService;
        this.route = route;
        this.clonedDroit = {};
        this.first = 0;
        this.isUpdate = false;
    }
    ngOnInit() {
        this.idProfile = this.route.snapshot.paramMap.get('idProfile');
        this.pagesService.getListPages().subscribe((pages) => {
            this.allPages = pages;
        });
        this.droitaccesService.getAllDroitAccesByProfilId(this.idProfile).subscribe((droits) => {
            this.droitsAcces = droits;
        });
        this.items = [
            { label: 'Configuration' },
            { label: 'Profile' },
            { label: "Droit d'accès" }
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
        this.isUpdate = true;
        this.clonedDroit[rowData.idDroitAcces] = Object.assign({}, rowData);
    }
    onRowEditSave(rowData) {
        if (rowData.idDroitAcces != null) {
            this.updateDroit(rowData);
            this.isUpdate = false;
        }
        else {
            this.addDroit(rowData);
        }
    }
    onRowEditCancel(rowData, index) {
        if (rowData.idDroitAcces != null) {
            this.droitsAcces[index] = this.clonedDroit[rowData.idDroitAcces];
        }
        else {
            this.droitsAcces.shift();
        }
        this.isUpdate = false;
    }
    addRow() {
        this.droitsAcces.forEach(droit => {
            let index = this.allPages.findIndex(el => el['nom'] == droit.page.nom);
            this.allPages.splice(index, 1);
        });
        if (this.allPages.length != 0) {
            const droit = {
                idDroitAcces: null,
                ajout: true,
                modif: true,
                supprime: true,
                archiver: true,
                suiviPhase: true
            };
            this.droitsAcces.unshift(droit);
            this.table.initRowEdit(droit);
        }
        else {
            this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Ce profil a le droit à toutes les pages! vous ne pouvez pas ajouter un nouveau droit d\'accès' });
        }
    }
    updateDroit(rowData) {
        this.droitaccesService.updateDroitAcces(rowData, this.idProfile)
            .subscribe(data => {
            this.showInfo();
        });
    }
    addDroit(rowData) {
        this.droitaccesService.addDroitAcces(rowData, this.idProfile)
            .subscribe((data) => {
            this.droitsAcces.shift();
            this.droitsAcces.unshift(data);
            this.showSuccess();
        });
    }
    showConfirm() {
        this.messageService.clear();
        this.messageService.add({
            key: 'idDroitAcces',
            sticky: true, severity: 'warn',
            summary: 'Voulez-vous supprimer ?',
            detail: 'Confirmation',
        });
    }
    deleteDroit(idDroitAcces) {
        this.droitaccesService.deleteDroitAcces(idDroitAcces)
            .subscribe(data => {
            let index = this.droitsAcces.findIndex(el => el['idDroitAcces'] == idDroitAcces);
            this.droitsAcces.splice(index, 1);
            this.showWarn();
        });
        this.messageService.clear('idDroitAcces');
    }
    onReject() {
        this.messageService.clear('idDroitAcces');
    }
};
__decorate([
    ViewChild('table')
], ListdroitaccesComponent.prototype, "table", void 0);
ListdroitaccesComponent = __decorate([
    Component({
        selector: 'app-listdroitacces',
        templateUrl: './listdroitacces.component.html',
        styleUrls: ['./listdroitacces.component.css']
    })
], ListdroitaccesComponent);
export { ListdroitaccesComponent };
//# sourceMappingURL=listdroitacces.component.js.map