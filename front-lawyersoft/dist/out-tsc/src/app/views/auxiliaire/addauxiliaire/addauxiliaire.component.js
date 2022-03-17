import { __decorate } from "tslib";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
let AddauxiliaireComponent = class AddauxiliaireComponent {
    constructor(typeauxiliaireService, auxiliaireService, messageService, router) {
        this.typeauxiliaireService = typeauxiliaireService;
        this.auxiliaireService = auxiliaireService;
        this.messageService = messageService;
        this.router = router;
        this.submitted = false;
        this.auxiliaireForm = new FormGroup({
            nom: new FormControl(null, Validators.required),
            prenom: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            gouvernorat: new FormControl(null, Validators.required),
            ville: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            telephone: new FormControl(null, [Validators.required, Validators.max(99999999)]),
            typeauxiliaireId: new FormControl(null, Validators.required)
        });
    }
    ngOnInit() {
        this.typeauxiliaireService.getListTypeAuxiliaire().subscribe((typeAux) => {
            this.listTypeAuxiliaire = typeAux;
        });
        this.items = [
            { label: 'Auxiliaire' },
            { label: 'Ajouter' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    resetAuxiliaireForm() {
        this.auxiliaireForm.reset();
        this.submitted = false;
    }
    addAuxiliaire() {
        this.submitted = true;
        if (this.auxiliaireForm.valid) {
            console.log(this.auxiliaireForm.value);
            this.auxiliaireService.addAuxiliaire(this.auxiliaireForm.value).subscribe(data => {
                this.showSuccess();
                this.router.navigateByUrl('/auxiliaire');
                console.log(data);
            });
        }
    }
    get f() { return this.auxiliaireForm.controls; }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Auxiliaire ajouté avec succès' });
    }
};
AddauxiliaireComponent = __decorate([
    Component({
        selector: 'app-addauxiliaire',
        templateUrl: './addauxiliaire.component.html',
        styleUrls: ['./addauxiliaire.component.css']
    })
], AddauxiliaireComponent);
export { AddauxiliaireComponent };
//# sourceMappingURL=addauxiliaire.component.js.map