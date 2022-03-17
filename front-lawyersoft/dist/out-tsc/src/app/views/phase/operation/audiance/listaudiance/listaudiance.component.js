import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let ListaudianceComponent = class ListaudianceComponent {
    constructor(phaseservice, audianceService, statusaudianceService, messageService, router, route, confirmationService) {
        this.phaseservice = phaseservice;
        this.audianceService = audianceService;
        this.statusaudianceService = statusaudianceService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.confirmationService = confirmationService;
        this.activeIndex = 1;
        this.msgs = [];
        this.first = 0;
        this.submitted = false;
        this.statuts = [
            { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
            { label: 'Pour notre réplique', value: 'Pour notre réplique' },
            { label: 'Lecture de jugement', value: 'Lecture de jugement' },
        ];
        this.etat = [
            { label: 'En cours', value: 'En cours' },
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.isValidFormSubmitted = false;
        this.audianceForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            dateAudiance: new FormControl(Date.now()),
            phaseId: new FormControl(),
        });
        this.phaseId = this.route.snapshot.paramMap.get('id');
        //this.idAudiance = this.route.snapshot.paramMap.get('id');
        console.log("phaseId", this.phaseId);
    }
    FindAllAudianceByPhase() {
        this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listAudiance", resultat);
            this.audianceService.listAudiance = resultat;
        });
    }
    ngOnInit() {
        /*this.statusaudianceService.getListStatusAudiance().subscribe((resultat: []) => {
          this.liststatusaudiance = resultat;
    
    
        });*/
        this.phaseId = this.route.snapshot.paramMap.get('id');
        //  console.log("affaireid" + this.affaireId);
        this.FindAllAudianceByPhase();
        this.cols = [
            { header: 'Titre' },
            { header: "Date de l'audiance" },
            { header: "Status de l'audiance" },
            { header: "Etat de l'affaire" },
        ];
        this.items = [
            { label: 'Phase' },
            { label: 'Opérations' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    resetAudianceForm() {
        this.audianceForm.reset();
        this.submitted = false;
    }
    showChange(event) {
        console.log(event);
        console.log(this.audianceForm.value);
    }
    confirm2(id) {
        this.confirmationService.confirm({
            message: 'Êtes-vous sûr de vouloir supprimer',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.audianceService.deleteAudiance(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.audianceService.listAudiance.findIndex(el => el['idAudiance'] == id);
                    this.audianceService.listAudiance.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Audiance supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
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
        this.idAudiance = id;
        console.log("idaudiance", this.idAudiance);
    }
};
ListaudianceComponent = __decorate([
    Component({
        selector: 'app-listaudiance',
        templateUrl: './listaudiance.component.html',
        styleUrls: ['./listaudiance.component.css']
    })
], ListaudianceComponent);
export { ListaudianceComponent };
//# sourceMappingURL=listaudiance.component.js.map