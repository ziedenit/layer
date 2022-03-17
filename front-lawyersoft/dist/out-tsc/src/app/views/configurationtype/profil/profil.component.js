import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let ProfilComponent = class ProfilComponent {
    // tslint:disable-next-line: variable-name
    //_unsubscribeAll: Subject<any>;
    constructor(profilService, route, messageService, droitaccesService, router) {
        //this._unsubscribeAll = new Subject();
        this.profilService = profilService;
        this.route = route;
        this.messageService = messageService;
        this.droitaccesService = droitaccesService;
        this.router = router;
        this.clonedProfile = {};
        this.first = 0;
    }
    ngOnInit() {
        this.profilService.getListProfil().subscribe((resultat) => {
            this.listProfiles = resultat;
            console.log(this.listProfiles);
        });
        this.items = [
            { label: 'Configuration' },
            { label: 'Profile' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    goDroitAcces(idProfil) {
        this.droitaccesService.getAllDroitAccesByProfilId(idProfil).subscribe((droits) => {
            console.log('droitprofil', droits.length);
            if (droits.length == 0) {
                this.router.navigate(['/adddroitacces/' + idProfil]);
            }
            else {
                this.router.navigate(['/listdroitacces/' + idProfil]);
            }
        });
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
        this.clonedProfile[rowData.idProfil] = Object.assign({}, rowData);
    }
    onRowEditSave(rowData) {
        if (rowData.idProfil != null) {
            this.updateProfile(rowData);
        }
        else {
            this.addProfile(rowData);
        }
    }
    onRowEditCancel(rowData, index) {
        if (rowData.idProfil != null) {
            this.listProfiles[index] = this.clonedProfile[rowData.idProfil];
        }
        else {
            this.listProfiles.shift();
        }
    }
    addRow() {
        const profil = {
            idProfil: null,
            nameProfil: null,
        };
        this.listProfiles.unshift(profil);
        this.table.initRowEdit(profil);
    }
    updateProfile(rowData) {
        this.profilService.updateProfil(rowData)
            .subscribe(data => {
            this.showInfo();
        });
    }
    addProfile(rowData) {
        if (rowData.nameProfil == 'ADMINSTRATEUR LAWYER') {
            this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Nom de profil utilisé reserver au super administrateur' });
        }
        else {
            this.profilService.addProfil(rowData)
                .subscribe((data) => {
                this.listProfiles.shift();
                this.listProfiles.unshift(data);
                this.showSuccess();
            });
        }
    }
    showConfirm() {
        this.messageService.clear();
        this.messageService.add({
            key: 'idProfil',
            sticky: true, severity: 'warn',
            summary: 'Voulez-vous supprimer ?',
            detail: 'Confirmation',
        });
    }
    deleteProfile(idProfil) {
        this.profilService.DeleteProfil(idProfil)
            .subscribe(data => {
            let index = this.listProfiles.findIndex(el => el['idProfil'] == idProfil);
            this.listProfiles.splice(index, 1);
            this.showWarn();
        });
        this.messageService.clear('idProfil');
    }
    onReject() {
        this.messageService.clear('idProfil');
    }
};
__decorate([
    ViewChild('table')
], ProfilComponent.prototype, "table", void 0);
ProfilComponent = __decorate([
    Component({
        selector: 'app-profil',
        templateUrl: './profil.component.html',
        styleUrls: ['./profil.component.css']
    })
], ProfilComponent);
export { ProfilComponent };
//# sourceMappingURL=profil.component.js.map