import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EncoursComponent = class EncoursComponent {
    constructor(affaireservice, confirmationService, messageService, route, router) {
        this.affaireservice = affaireservice;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.msgs = [];
        this.first = 0;
    }
    ngOnInit() {
        this.affaireservice.findAllByEtat('En cours').subscribe((res) => {
            this.listAffaire = res;
            console.log(this.listAffaire);
        });
        this.cols = [
            { header: 'Référence' },
            { header: 'Titre' },
            { header: 'Date Création' },
            { header: 'Avocats' },
            { header: 'Type Affaire' },
        ];
        this.items = [
            { label: 'Affaire' },
            { label: 'Liste des affaires En cours' },
        ];
        this.home = { icon: 'pi pi-home' };
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
            message: 'Êtes-vous sûr de vouloir supprimer',
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
EncoursComponent = __decorate([
    Component({
        selector: 'app-encours',
        templateUrl: './encours.component.html',
        styleUrls: ['./encours.component.css']
    })
], EncoursComponent);
export { EncoursComponent };
//# sourceMappingURL=encours.component.js.map