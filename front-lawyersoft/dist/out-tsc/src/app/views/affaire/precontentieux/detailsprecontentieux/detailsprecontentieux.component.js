import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let DetailsprecontentieuxComponent = class DetailsprecontentieuxComponent {
    constructor(affaireservice, typeaffaireservice, messageService, router, route, intervenantService, auxiliaireService, userService) {
        this.affaireservice = affaireservice;
        this.typeaffaireservice = typeaffaireservice;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.intervenantService = intervenantService;
        this.auxiliaireService = auxiliaireService;
        this.userService = userService;
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
            typeaffaireId: new FormControl(),
        });
    }
    ngOnInit() {
        this.intervenantService.getListIntervenant().subscribe((res) => {
            this.listIntervenant = res;
            console.log(this.listIntervenant);
        });
        this.auxiliaireService.getListAuxiliaire().subscribe((aux) => {
            this.listAuxiliaire = aux;
            console.log(this.listAuxiliaire);
        });
        this.userService.getListUser().subscribe((aux) => {
            this.listUser = aux;
            console.log(this.listUser);
        });
        this.typeaffaireservice.getListTypeAffaire().subscribe((typeaffaire) => {
            this.listTypeaffaire = typeaffaire;
        });
        this.idAffaire = this.route.snapshot.paramMap.get('id');
        this.affaireservice.getAffairebyid(this.idAffaire).subscribe(affaire => {
            console.log('affaire', affaire);
            this.affaire = affaire;
            this.affaireForm.setValue(affaire);
        });
        this.items = [
            { label: 'Affaire' },
            { label: 'Pré-contentitieux' },
            { label: 'Détails' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
};
DetailsprecontentieuxComponent = __decorate([
    Component({
        selector: 'app-detailsprecontentieux',
        templateUrl: './detailsprecontentieux.component.html',
        styleUrls: ['./detailsprecontentieux.component.css']
    })
], DetailsprecontentieuxComponent);
export { DetailsprecontentieuxComponent };
//# sourceMappingURL=detailsprecontentieux.component.js.map