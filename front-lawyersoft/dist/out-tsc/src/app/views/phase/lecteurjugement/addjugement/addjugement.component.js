import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Phase } from 'src/app/entitie/Phase';
import { Affaire } from 'src/app/entitie/Affaire';
let AddjugementComponent = class AddjugementComponent {
    constructor(lecteurjugementService, router, confirmationService, affaireservice, messageService, route, phaseservice) {
        this.lecteurjugementService = lecteurjugementService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.affaireservice = affaireservice;
        this.messageService = messageService;
        this.route = route;
        this.phaseservice = phaseservice;
        this.submitted = false;
        this.msgs = [];
        this.first = 0;
        this.isValidFormSubmitted = false;
        this.uploadedFiles = [];
        this.phase = new Phase();
        this.affaire = new Affaire();
        //affairedto: AffaireDto = new AffaireDto();
        this.lecteurjugementForm = new FormGroup({
            description: new FormControl(null, Validators.required),
            date: new FormControl(Date.now()),
            favorable: new FormControl(),
            file: new FormControl(null, Validators.required),
            fileName: new FormControl(),
            fileDownloadUri: new FormControl(),
            fileType: new FormControl(),
            size: new FormControl(),
            phaseId: new FormControl(null, Validators.required),
        });
    }
    ngOnInit() {
        console.log("add", this.lecteur);
    }
    showBasicDialog() {
        // tslint:disable-next-line: no-unused-expression
        this.displayBasic = true;
        console.log("add", this.lecteur);
    }
    myUploader(event) {
        console.log(event);
        for (let file of event.files) {
            console.log(file);
        }
    }
    onUpload(event) {
        console.log("event");
        console.log(event);
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
    }
    get f() { return this.lecteurjugementForm.controls; }
    showChange(event) {
        console.log(event);
        console.log(this.lecteurjugementForm.value);
    }
    addlecteurjugement() {
        this.submitted = true;
        //this.lecteurjugementForm.valid  &&
        if (this.uploadedFiles.length != 0) {
            let file = this.uploadedFiles[0];
            console.log("file", file);
            this.lecteurjugementService.addLecteurjugement(file, this.lecteurjugementForm.value.favorable, this.lecteurjugementForm.value.description, this.phaseId).subscribe(data => {
                // console.log("favorabel", this.lecteurjugementForm.value.favorable)
                if (this.etat === 'Archivé') {
                    this.phaseservice.getPhasebyid(this.phaseId).subscribe(res => {
                        this.Phase = res;
                        this.Affaire = this.Phase.affaireId;
                        this.Affaire.etatavant = this.Affaire.etat;
                        this.Affaire.etat = this.etat;
                        this.affaireservice.updateAffaire(this.Affaire).subscribe(data => {
                        });
                    });
                }
                else {
                    this.phaseservice.getPhasebyid(this.phaseId).subscribe(res => {
                        this.Phase = res;
                        this.Phase.current = false;
                        this.phaseservice.updatePhase(this.Phase).subscribe(data => {
                        });
                        this.phase.nom = this.nom;
                        this.phase.dateDebut = new Date();
                        this.phase.affaireId = this.Phase.affaireId;
                        this.phase.current = true;
                        this.phaseservice.addPhase(this.phase).subscribe(data => {
                        });
                    });
                }
                //this.showSuccess();
                this.displayBasic = false;
            });
        }
    }
};
__decorate([
    Input("displayBasic")
], AddjugementComponent.prototype, "displayBasic", void 0);
__decorate([
    Input("lecteur")
], AddjugementComponent.prototype, "lecteur", void 0);
__decorate([
    Input("phaseId")
], AddjugementComponent.prototype, "phaseId", void 0);
AddjugementComponent = __decorate([
    Component({
        selector: 'app-addjugement',
        templateUrl: './addjugement.component.html',
        styleUrls: ['./addjugement.component.css']
    })
], AddjugementComponent);
export { AddjugementComponent };
//# sourceMappingURL=addjugement.component.js.map