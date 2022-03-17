import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddaudianceComponent = class AddaudianceComponent {
    constructor(phaseservice, audianceService, statusaudianceService, messageService, router, route, confirmationService) {
        this.phaseservice = phaseservice;
        this.audianceService = audianceService;
        this.statusaudianceService = statusaudianceService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.confirmationService = confirmationService;
        this.activeIndex = 1;
        this.submitted = false;
        this.isValidFormSubmitted = false;
        this.msgs = [];
        this.first = 0;
        /*statuts = [
          { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
          { label: 'Pour notre réplique', value: 'Pour notre réplique' },
          { label: 'Lecture de jugement', value: 'Lecture de jugement' },
      
        ];*/
        this.etat = [
            /*  { label: 'En cours', value: 'En cours' },*/
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.audianceForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            dateAudiance: new FormControl(null, Validators.required),
            phaseId: new FormControl(null, Validators.required),
            statusId: new FormControl(null, Validators.required),
        });
    }
    ngOnInit() {
        this.statusaudianceService.getListStatusAudiance().subscribe((resultat) => {
            this.liststatusaudiance = resultat;
        });
        console.log("addphaseid", this.phaseId);
        this.phaseservice.getPhasebyid(this.phaseId).subscribe(phase => {
            this.phase = phase;
        });
    }
    /* FindAllAudianceByPhase() {
      //this.phaseId = this.route.snapshot.paramMap.get('id');
      //console.log(this.phaseId)
      this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
        console.log("listAudiance", resultat);
        this.listAudiance = resultat;
      });
    } */
    showBasicDialogadd() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicadd = true;
    }
    resetAudianceForm() {
        this.audianceForm.reset();
        this.submitted = false;
    }
    showChange(event) {
        console.log(event);
        console.log(this.audianceForm.value);
    }
    showSuccess1() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Audiance effectué avec succès' });
    }
    get f() {
        return this.audianceForm.controls;
    }
    FindAllAudianceByPhase() {
        this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listAudiance", resultat);
            this.audianceService.listAudiance = resultat;
        });
    }
    addaudiance() {
        console.log("valueform");
        this.submitted = true;
        console.log("this.audianceForm", this.audianceForm.value);
        if (this.audianceForm.valid) {
            console.log(this.audianceForm.value);
            this.audianceForm.value.phaseId = this.phase;
            console.log("avantadd", this.audianceForm.value);
            this.audianceService.addAudiance(this.audianceForm.value).subscribe(data => {
                this.showSuccess1();
                console.log(data);
                this.displayBasicadd = false;
                this.audianceService.listAudiance.push(data);
                this.FindAllAudianceByPhase();
            });
        }
        else {
            this.submitted = true;
        }
    }
};
__decorate([
    Input("displayBasicadd")
], AddaudianceComponent.prototype, "displayBasicadd", void 0);
__decorate([
    Input("phaseId")
], AddaudianceComponent.prototype, "phaseId", void 0);
AddaudianceComponent = __decorate([
    Component({
        selector: 'app-addaudiance',
        templateUrl: './addaudiance.component.html',
        styleUrls: ['./addaudiance.component.css'],
        providers: [MessageService]
    })
], AddaudianceComponent);
export { AddaudianceComponent };
//# sourceMappingURL=addaudiance.component.js.map