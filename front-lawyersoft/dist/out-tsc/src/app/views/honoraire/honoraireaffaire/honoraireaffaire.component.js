import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let HonoraireaffaireComponent = class HonoraireaffaireComponent {
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
        this.submitted = false;
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
            honoraireId: new FormControl(null),
            titre: new FormControl(),
            montant: new FormControl(),
            dateHonnoraire: new FormControl(),
            affaireId: new FormControl(),
            consultationId: new FormControl(),
            typehonoraireId: new FormControl(),
        });
    }
    ngOnInit() {
        this.intervenantService.getListIntervenant().subscribe((res) => {
            this.listIntervenant = res;
            console.log(this.listIntervenant);
        });
        this.affaireId = this.route.snapshot.paramMap.get('id');
        //  console.log("affaireid" + this.affaireId);
        this.affaireservice.getAffairebyid(this.affaireId).subscribe(affaire => {
            console.log('affaire', affaire);
            this.affaire = affaire;
            this.affaireForm.setValue(affaire);
        });
        this.honoraireservice.findAllAffaire(this.affaireId).subscribe(resultat => {
            console.log("listHonnoraire", resultat);
            this.listHonnoraire = resultat;
        });
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
    }
};
HonoraireaffaireComponent = __decorate([
    Component({
        selector: 'app-honoraireaffaire',
        templateUrl: './honoraireaffaire.component.html',
        styleUrls: ['./honoraireaffaire.component.css']
    })
], HonoraireaffaireComponent);
export { HonoraireaffaireComponent };
//# sourceMappingURL=honoraireaffaire.component.js.map