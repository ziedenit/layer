import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ArchiverComponent = class ArchiverComponent {
    constructor(affaireservice, confirmationService, messageService, router) {
        this.affaireservice = affaireservice;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.router = router;
        this.msgs = [];
        this.first = 0;
    }
    // tslint:disable-next-line: ban-types
    findAllByEtat(etat) {
        let bool;
        this.affaireservice.findAllByEtat(etat).subscribe((res) => {
            this.listAffaire = res;
            console.log(this.listAffaire);
        });
        return bool;
    }
    ngOnInit() {
        this.findAllByEtat('Archivé');
        this.cols = [
            { header: 'Référence' },
            { header: 'Titre' },
            { header: 'Date Création' },
            { header: 'Type Affaire' },
        ];
        this.items = [
            { label: 'Affaire' },
            { label: 'Liste des affaires archivées' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    updateetat(id) {
        console.log("idaffaire" + this.idAffaire);
        this.affaireservice.getAffairebyid(id).subscribe(affaire => {
            this.affaire = affaire;
            affaire.etat = affaire.etatavant;
            console.log("affaire.etat" + affaire.etat);
            console.log('affaireupdate', affaire);
            this.affaireservice.updateAffaire(affaire).subscribe(auxiliaire => {
                console.log('affaireupdate', affaire);
                this.showSuccess();
            });
        });
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Affaire a été restaurée avec succès' });
    }
};
ArchiverComponent = __decorate([
    Component({
        selector: 'app-archiver',
        templateUrl: './archiver.component.html',
        styleUrls: ['./archiver.component.css']
    })
], ArchiverComponent);
export { ArchiverComponent };
//# sourceMappingURL=archiver.component.js.map