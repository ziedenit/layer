import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let ListdossierComponent = class ListdossierComponent {
    constructor(affaireservice, dossierservice, router, confirmationService, messageService, route) {
        this.affaireservice = affaireservice;
        this.dossierservice = dossierservice;
        this.router = router;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.route = route;
        this.submitted = false;
        this.msgs = [];
        this.first = 0;
        this.isValidFormSubmitted = false;
        this.dossierForm = new FormGroup({
            nom: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            dateCreation: new FormControl(Date.now()),
            affaireId: new FormControl(),
        });
        this.dossierForm1 = new FormGroup({
            dossierId: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            dateCreation: new FormControl(Date.now()),
            affaireId: new FormControl(),
        });
    }
    findAllByAffaire() {
        this.affaireid = this.route.snapshot.paramMap.get('id');
        this.dossierservice.findAllByAffaire(this.affaireid).subscribe((resultat) => {
            this.listDossier = resultat;
            console.log(this.listDossier);
        });
    }
    ngOnInit() {
        this.findAllByAffaire();
        this.affaireservice.getAffairebyid(this.affaireid).subscribe(affaire => {
            this.affaire = affaire;
        });
        this.cols = [
            { header: 'Nom' },
            { header: 'Déscription' },
        ];
    }
    showBasicDialog() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasic = true;
    }
    showBasicDialogupdate(id) {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasic1 = true;
        this.dossierservice.getDossierbyid(id)
            .subscribe(data => {
            this.dossier = data;
            this.dossierForm1.setValue(data);
        }, error => console.log(error));
    }
    resetDossierForm() {
        this.dossierForm.reset();
        this.submitted = false;
    }
    updateDossier() {
        console.log(this.dossierForm1.value);
        this.dossierservice.updateDossier(this.dossierForm1.value)
            .subscribe(data => {
            this.showInfo();
            this.listDossier.push(data);
            this.displayBasic1 = false;
            this.findAllByAffaire();
        });
    }
    adddossier() {
        this.submitted = true;
        console.log("valueform" + this.dossierForm.value);
        if (this.dossierForm.valid) {
            console.log(this.dossierForm.value);
            this.dossierForm.value.affaireId = this.affaire;
            this.dossierservice.addDossier(this.dossierForm.value).subscribe(data => {
                this.showSuccess();
                console.log(data);
                this.displayBasic = false;
                this.listDossier.push(data);
            });
        }
    }
    get f() { return this.dossierForm.controls; }
    showChange(event) {
        console.log(event);
        console.log(this.dossierForm.value);
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Dossier ajouté avec succès' });
    }
    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Message', detail: 'Dossier modifié avec succès' });
    }
    confirm2(id) {
        console.log("id dossier" + id);
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ? ',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.dossierservice.deleteDossier(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.listDossier.findIndex(el => el['dossierId'] == id);
                    this.listDossier.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Dossier supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListdossierComponent = __decorate([
    Component({
        selector: 'app-listdossier',
        templateUrl: './listdossier.component.html',
        styleUrls: ['./listdossier.component.css']
    })
], ListdossierComponent);
export { ListdossierComponent };
//# sourceMappingURL=listdossier.component.js.map