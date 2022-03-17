import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let ListComponent = class ListComponent {
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
        this.totaldepense = 0;
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
        this.honoraireservice.findByAffaireType(this.affaireId, 'depense').subscribe(resultat => {
            this.honoraireservice.listHonnorairedepense = resultat;
            resultat.forEach(element => {
                this.totaldepense += element.montant;
            });
            this.honoraireservice.findByaffairetypenull(this.affaireId).subscribe(data => {
                this.honoraire = data;
                this.honoraire.montant = this.totaldepense;
                console.log('this.honoraire.montant', this.honoraire.montant);
                this.honoraireservice.updateHonoraire(this.honoraire).subscribe(data => {
                });
            });
        });
    }
    addTotalDepense(totalDepense) {
        this.totaldepense += totalDepense;
    }
    get f() { return this.honoraireForm.controls; }
    showBasicDialogaddpense() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicaddepense = true;
    }
    showBasicDialogupdatedepense(honnoraire) {
        console.log("dialog");
        console.log("id", honnoraire);
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicupdatedepense = true;
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
                    let index = this.honoraireservice.listHonnorairedepense.findIndex(el => el['honnoraireId'] == id);
                    this.honoraireservice.listHonnorairedepense.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Dépense supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListComponent = __decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.css']
    })
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map