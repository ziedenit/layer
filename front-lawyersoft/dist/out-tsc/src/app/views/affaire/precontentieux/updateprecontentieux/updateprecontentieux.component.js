import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdateprecontentieuxComponent = class UpdateprecontentieuxComponent {
    constructor(affaireservice, typeaffaireservice, messageService, router, intervenantService, auxiliaireService, userService, route) {
        this.affaireservice = affaireservice;
        this.typeaffaireservice = typeaffaireservice;
        this.messageService = messageService;
        this.router = router;
        this.intervenantService = intervenantService;
        this.auxiliaireService = auxiliaireService;
        this.userService = userService;
        this.route = route;
        this.submitted = false;
        this.etats = [
            { label: 'En cours', value: 'En cours' },
            { label: 'Pré-contentitieux', value: 'Pré-contentitieux' },
        ];
        this.isValidFormSubmitted = false;
        this.affaireForm = new FormGroup({
            affaireId: new FormControl(null),
            titre: new FormControl(null, Validators.required),
            reference: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            etatavant: new FormControl(null, Validators.required),
            dateCreation: new FormControl(Date.now()),
            dateCloture: new FormControl(Date.now()),
            typeaffaireId: new FormControl(null, Validators.required),
            intervenant: new FormControl(null, Validators.required),
            auxiliaire: new FormControl(null, Validators.required),
            user: new FormControl(null, Validators.required),
        });
    }
    ngOnInit() {
        this.typeaffaireservice.getListTypeAffaire().subscribe((resultat) => {
            this.listTypeaffaire = resultat;
        });
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
        this.idAffaire = this.route.snapshot.paramMap.get('id');
        this.affaireservice.getAffairebyid(this.idAffaire).subscribe(affaire => {
            console.log('aux', affaire);
            this.affaire = affaire;
            this.affaireForm.setValue(affaire);
        });
        this.items = [
            { label: 'Affaire' },
            { label: 'Pré-contentitieux' },
            { label: 'Modifier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    get f() { return this.affaireForm.controls; }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
    }
    updateAffaire() {
        if (this.affaireForm.valid) {
            this.submitted = false;
            this.affaireservice.updateAffaire(this.affaireForm.value).subscribe(affaire => {
                this.showSuccess();
                this.router.navigateByUrl('/affaire/precontentieux');
            });
        }
        else {
            this.submitted = true;
        }
    }
    resetAffaireForm() {
        this.affaireForm.setValue(this.affaire);
        this.submitted = false;
    }
};
UpdateprecontentieuxComponent = __decorate([
    Component({
        selector: 'app-updateprecontentieux',
        templateUrl: './updateprecontentieux.component.html',
        styleUrls: ['./updateprecontentieux.component.css']
    })
], UpdateprecontentieuxComponent);
export { UpdateprecontentieuxComponent };
//# sourceMappingURL=updateprecontentieux.component.js.map