import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdateaudianceComponent = class UpdateaudianceComponent {
    constructor(phaseservice, audianceService, statusaudianceService, messageService, router, route) {
        this.phaseservice = phaseservice;
        this.audianceService = audianceService;
        this.statusaudianceService = statusaudianceService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.etat = [
            /* { label: 'En cours', value: 'En cours' },*/
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.isValidFormSubmitted = false;
        this.audianceForm = new FormGroup({
            idAudiance: new FormControl(null, Validators.required),
            titre: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            dateAudiance: new FormControl(null, Validators.required),
            phaseId: new FormControl(),
            statusId: new FormControl(null, Validators.required),
        });
        //this.idAudiance = this.route.snapshot.paramMap.get('id');
        this.phaseId = this.route.snapshot.paramMap.get('id');
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnChanges(changes) {
        this.audianceForm.setValue(changes.idAudiance.currentValue);
        console.log(changes.idAudiance.currentValue);
    }
    FindAllAudianceByPhase() {
        this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
            console.log("listAudiance", resultat);
            this.audianceService.listAudiance = resultat;
        });
    }
    ngOnInit() {
        this.statusaudianceService.getListStatusAudiance().subscribe((resultat) => {
            this.liststatusaudiance = resultat;
            console.log(" this.liststatusaudiance", this.liststatusaudiance);
        });
        //console.log("idaudiance", this.idAudiance)
        if (this.idAudiance != null) {
            //console.log("eeee", this.idAudiance)
            this.audianceService.getAudiancebyid(this.idAudiance).subscribe(audiance => {
                console.log('audiance', audiance);
                this.audiance = audiance;
                this.audianceForm.setValue(audiance);
            });
        }
        this.items = [
            { label: 'Phase' },
            { label: 'Opération' },
            { label: 'Audiance' },
            { label: 'Modifier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    showBasicDialogupdate() {
        console.log("dialog");
        // tslint:disable-next-line: no-unused-expression
        this.displayBasicupdate = true;
    }
    showChange(event) {
        console.log(event);
        console.log(this.audianceForm.value);
    }
    get f() { return this.audianceForm.controls; }
    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
    }
    selectChangeHandler(event) {
        //update the ui
        this.lecteur = event.value;
        console.log("lecteur", this.lecteur);
        if (this.lecteur.status === 'Lecture de jugement') {
            this.displayBasic = true;
            console.log("lecteurdisplay", this.lecteur);
            console.log(this.displayBasic);
        }
    }
    updateAudiance() {
        if (this.audianceForm.valid) {
            this.submitted = false;
            this.audianceService.updateAudiance(this.audianceForm.value).subscribe(data => {
                this.showInfo();
                this.displayBasicupdate = false;
                this.FindAllAudianceByPhase();
            });
        }
        else {
            this.submitted = true;
        }
    }
    resetAudianceForm() {
        this.audianceForm.setValue(this.audiance);
        this.submitted = false;
    }
};
__decorate([
    Input('displayBasicupdate')
], UpdateaudianceComponent.prototype, "displayBasicupdate", void 0);
__decorate([
    Input('idAudiance')
], UpdateaudianceComponent.prototype, "idAudiance", void 0);
UpdateaudianceComponent = __decorate([
    Component({
        selector: 'app-updateaudiance',
        templateUrl: './updateaudiance.component.html',
        styleUrls: ['./updateaudiance.component.css'],
        providers: [MessageService]
    })
], UpdateaudianceComponent);
export { UpdateaudianceComponent };
//# sourceMappingURL=updateaudiance.component.js.map