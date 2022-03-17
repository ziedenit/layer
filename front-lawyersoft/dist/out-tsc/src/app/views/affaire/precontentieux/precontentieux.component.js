import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PrecontentieuxComponent = class PrecontentieuxComponent {
    constructor(affaireservice, confirmationService, messageService, router) {
        this.affaireservice = affaireservice;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.router = router;
        this.msgs = [];
        this.first = 0;
    }
    ngOnInit() {
        this.findAllByEtat('Pré-contentitieux');
        this.cols = [
            { header: 'Référence' },
            { header: 'Titre affaire' },
            { header: 'Avocats' },
            { header: 'Date du dépot' },
        ];
        this.items = [
            { label: 'Affaire' },
            { label: 'Liste des affaires Pré-contentitieux' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    // tslint:disable-next-line: no-unused-expression
    // tslint:disable-next-line: align
    // tslint:disable-next-line: ban-types
    findAllByEtat(etat) {
        let bool;
        this.affaireservice.findAllByEtat(etat).subscribe((res) => {
            this.listAffaire = res;
            console.log(this.listAffaire);
        });
        return bool;
    }
    updateetat(id) {
        console.log("idaffaire" + this.idAffaire);
        this.affaireservice.getAffairebyid(id).subscribe(affaire => {
            console.log('affairegetetat', affaire);
            this.affaire = affaire;
            affaire.etatavant = affaire.etat;
            console.log(" affaire.etatavant " + affaire.etatavant);
            affaire.etat = "Archivé";
            console.log('affaireetatarchivé', affaire);
            this.affaireservice.updateAffaire(affaire).subscribe(auxiliaire => {
                console.log('affaireupdate', affaire);
                this.showSuccess();
            });
        });
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Affaire a été archivée avec succès' });
    }
    confirm2(id) {
        this.confirmationService.confirm({
            message: 'Êtes-vous sûr de vouloir supprimer' + this.listAffaire.findIndex(el => el['reference']),
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.affaireservice.deleteAffaire(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.listAffaire.findIndex(el => el['affaireid'] == id);
                    this.listAffaire.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Affaire supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
PrecontentieuxComponent = __decorate([
    Component({
        selector: 'app-precontentieux',
        templateUrl: './precontentieux.component.html',
        styleUrls: ['./precontentieux.component.css']
    })
], PrecontentieuxComponent);
export { PrecontentieuxComponent };
//# sourceMappingURL=precontentieux.component.js.map