import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let ListversementComponent = class ListversementComponent {
    constructor(affaireservice, honoraireservice, phaseservice, confirmationService, messageService, route, router, intervenantService) {
        this.affaireservice = affaireservice;
        this.honoraireservice = honoraireservice;
        this.phaseservice = phaseservice;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.intervenantService = intervenantService;
        this.msgs = [];
        this.first = 0;
        this.totalversement = 0;
        this.reste = 0;
        this.isValidFormSubmitted = false;
        this.affaireForm = new FormGroup({
            affaireId: new FormControl(null),
            titre: new FormControl(),
            reference: new FormControl(),
            description: new FormControl(),
            intervenant: new FormControl(),
            auxiliaire: new FormControl(),
            user: new FormControl(),
            dateCreation: new FormControl(),
            dateCloture: new FormControl(),
            etat: new FormControl(),
            etatavant: new FormControl(),
            typeaffaireId: new FormControl(),
        });
        this.honoraireForm = new FormGroup({
            honnoraireId: new FormControl(),
            titre: new FormControl(),
            type: new FormControl(),
            montant: new FormControl(),
            reste: new FormControl(),
            dateHonnoraire: new FormControl(),
            affaireId: new FormControl(),
            consultationId: new FormControl(),
        });
        this.affaireId = this.route.snapshot.paramMap.get('id');
        console.log(this.affaireId);
    }
    ngOnInit() {
        this.cols = [
            { header: 'Titre' },
            { header: 'Date' },
            { header: 'Montant' },
        ];
        this.items = [
            { label: 'Honoraires' },
            { label: 'Liste des honoraires' },
            { label: 'Détails honoraires' },
        ];
        this.home = { icon: 'pi pi-home' };
        this.honoraireservice.findByAffaireType(this.affaireId, 'versement').subscribe(resultat => {
            this.honoraireservice.listHonnoraireversement = resultat;
            resultat.forEach(element => {
                this.totalversement += element.montant;
            });
            this.honoraireservice.findByaffairetypenull(this.affaireId).subscribe(data => {
                this.honoraire = data;
                this.reste = this.honoraire.montant - this.totalversement;
                this.honoraire.reste = this.reste;
                console.log('this.honoraire.reste', this.honoraire.reste);
                this.honoraireservice.updateHonoraire(this.honoraire).subscribe(data => {
                });
            });
        });
    }
    addTotalVersement(totalVersement) {
        this.totalversement += totalVersement;
    }
    get f() { return this.honoraireForm.controls; }
    showBasicDialogaddversement() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicaddversement = true;
    }
    showBasicDialogupdateversement(honnoraire) {
        console.log("dialog");
        console.log("id", honnoraire);
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicupdateversement = true;
        this.honoraireToUpdate = honnoraire;
        console.log("idaudiance", this.honoraireToUpdate);
    }
    confirm2(id) {
        console.log("id dossier" + id);
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ? ',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.honoraireservice.deleteHonoraire(id)
                    .subscribe(data => {
                    let index = this.honoraireservice.listHonnoraireversement.findIndex(el => el['honnoraireId'] == id);
                    this.honoraireservice.listHonnoraireversement.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Vérsement supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListversementComponent = __decorate([
    Component({
        selector: 'app-listversement',
        templateUrl: './listversement.component.html',
        styleUrls: ['./listversement.component.css']
    })
], ListversementComponent);
export { ListversementComponent };
//# sourceMappingURL=listversement.component.js.map