import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let ListtravailfaireComponent = class ListtravailfaireComponent {
    constructor(phaseservice, tacheService, messageService, router, route, confirmationService) {
        this.phaseservice = phaseservice;
        this.tacheService = tacheService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.confirmationService = confirmationService;
        this.msgs = [];
        this.first = 0;
        this.submitted = false;
        this.isValidFormSubmitted = false;
        this.tacheForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            dateDebut: new FormControl(Date.now()),
            phaseId: new FormControl(),
        });
        this.phaseId = this.route.snapshot.paramMap.get('id');
        console.log("phaseId", this.phaseId);
    }
    FindAllTacheByPhase() {
        this.tacheService.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listTache", resultat);
            this.tacheService.listTache = resultat;
        });
    }
    ngOnInit() {
        this.phaseId = this.route.snapshot.paramMap.get('id');
        this.FindAllTacheByPhase();
        this.cols1 = [
            { header: 'Titre' },
            { header: "Date de début" },
            { header: "Etat" },
        ];
        this.items = [
            { label: 'Phase' },
            { label: 'Opérations' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    showBasicDialogadd() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicadd = true;
    }
    showBasicDialogupdate(id) {
        console.log("dialog");
        console.log("id", id);
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicupdate = true;
        this.idTache = id;
        console.log("idTache", this.idTache);
    }
    resetTacheForm() {
        this.tacheForm.reset();
        this.submitted = false;
    }
    showChange1(event) {
        console.log(event);
        console.log(this.tacheForm.value);
    }
    confirm3(id) {
        this.confirmationService.confirm({
            message: 'Êtes-vous sûr de vouloir supprimer',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.tacheService.deleteTache(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.tacheService.listTache.findIndex(el => el['idTache'] == id);
                    this.tacheService.listTache.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Tache supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListtravailfaireComponent = __decorate([
    Component({
        selector: 'app-listtravailfaire',
        templateUrl: './listtravailfaire.component.html',
        styleUrls: ['./listtravailfaire.component.css'],
        providers: [MessageService]
    })
], ListtravailfaireComponent);
export { ListtravailfaireComponent };
//# sourceMappingURL=listtravailfaire.component.js.map